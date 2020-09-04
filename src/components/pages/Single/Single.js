import React from 'react';
// import PropTypes from 'prop-types';

import './Single.scss';

const Single = (props) => {
  const { itemId } = props.match.params;

  return (
    <div>
      <h1>SINGLE ITEM: {itemId}</h1>
    </div>
  );
};

// Single.propTypes = {}

export default Single;
