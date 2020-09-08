import React from 'react';
// import PropTypes from 'prop-types';

import ItemForm from '../../shared/ItemForm/ItemForm';

import './Edit.scss';

const Edit = (props) => {
  const { itemId } = props.match.params;

  const nextPage = (address) => {
    props.history.push(address);
  };

  return (
    <div>
      <h2>UPDATE ITEM</h2>
      <ItemForm edit={true} itemId={itemId} nextPage={nextPage} />
    </div>
  );
};

// Edit.propTypes = {}

export default Edit;
