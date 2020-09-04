import React from 'react';
// import PropTypes from 'prop-types';

import './Edit.scss';

const Edit = (props) => {
  const { itemId } = props.match.params;

  return (
    <div>
      <h1>NOW EDITING {itemId}</h1>
    </div>
  );
};

// Edit.propTypes = {}

export default Edit;
