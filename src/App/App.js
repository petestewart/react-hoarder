import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import Navbar from '../components/pages/Navbar/Navbar';
import Home from '../components/pages/Home/Home';
import MyStuff from '../components/pages/MyStuff/MyStuff';
import New from '../components/pages/New/New';
import Edit from '../components/pages/Edit/Edit';
import Single from '../components/pages/Single/Single';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Navbar authed={authed} />
            <div className="container">
              <Switch>
                <PrivateRoute path="/home" component={Home} authed={authed} />
                <PrivateRoute exact path="/stuff" component={MyStuff} authed={authed} />
                <PrivateRoute path="/new" component={New} authed={authed} />
                <PrivateRoute path="/edit/:itemId" component={Edit} authed={authed} />
                <PrivateRoute path="/stuff/:itemId" component={Single} authed={authed} />
                <PublicRoute path="/auth" component={Auth} authed={authed} />
                <Redirect from="*" to="/home" />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
