import React from 'react';
// import PropTypes from 'prop-types';

import ItemForm from '../../shared/ItemForm/ItemForm';

import './New.scss';

const New = (props) => {
  const nextPage = (address) => {
    props.history.push(address);
  };

  return (
    <>
      <h1>
        NEW ITEM
      </h1>
      <ItemForm nextPage={nextPage} />
    </>
  );
};

// New.propTypes = {}

export default New;
