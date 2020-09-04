import React from 'react';
// import PropTypes from 'prop-types';

import './MyStuff.scss';

const MyStuff = (props) => {
  const editStuffHandler = (e) => {
    e.preventDefault();
    const itemId = '12345';
    props.history.push(`/edit/${itemId}`);
  };

  const singleItemHandler = (e) => {
    e.preventDefault();
    const itemId = '12345';
    props.history.push(`/stuff/${itemId}`);
  };

  return (
    <div className="my-stuff">
      <h1>MY STUFF</h1>
      <div className="btn-group">
        <button className="btn btn-secondary" onClick={editStuffHandler}>Edit</button>
        <button className="btn btn-secondary" onClick={singleItemHandler}>Single</button>
      </div>
    </div>
  );
};

// MyStuff.propTypes = {}

export default MyStuff;
