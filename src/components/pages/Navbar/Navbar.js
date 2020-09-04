import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const { authed, isOpen, toggle } = props;

  const buildNavbar = () => {
    if (authed) {
      return (
        <nav className="ml-auto">
          <NavLink className="text-dark mr-3" tag={NavLink} to="/home">Home</NavLink>
          <NavLink className="text-dark mr-3" tag={NavLink} to="/mystuff">My Stuff</NavLink>
          <NavLink className="text-dark mr-3" tag={NavLink} to="/new">New</NavLink>

        </nav>
      );
    }
    return <nav className="ml-auto"></nav>;
  };

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Hoarder</NavLink>
        <button className="navbar-toggler" type="button" onClick={toggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" isOpen={isOpen}>
          {buildNavbar()}
        </div>
      </nav>
  );
};

export default Navbar;
