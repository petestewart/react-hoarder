import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import './ItemForm.scss';

import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';

const ItemForm = (props) => {
  const [item, setItem] = useState({
    itemName: '',
    itemImage: '',
    itemDescription: '',
  });

  useEffect(() => {
    if (props.edit) {
      const { itemId } = props;
      itemsData.getItem(itemId)
        .then(({ data }) => setItem(data))
        .catch((err) => console.error(err));
    }
  }, [props]);

  const inputHandler = (e) => {
    e.preventDefault();
    setItem({ ...item, [e.target.id]: e.target.value });
  };

  const submitItem = (e) => {
    e.preventDefault();
    const submittedItem = { ...item };
    submittedItem.uid = authData.getUid();
    if (!props.edit) {
      itemsData.createItem(submittedItem)
        .then(() => {
          props.nextPage('/stuff');
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="itemName">Name</label>
        <input
          type="text"
          className="form-control"
          id="itemName"
          value={item.itemName}
          onChange={inputHandler}
          />
        <label htmlFor="itemImage">Image Url</label>
        <input
          type="text"
          className="form-control"
          id="itemImage"
          value={item.itemImage}
          onChange={inputHandler}
          />
        <label htmlFor="itemDescription">Description</label>
        <input
          type="text"
          className="form-control"
          id="itemDescription"
          value={item.itemDescription}
          onChange={inputHandler}
          />
      </div>
      <button onClick={submitItem}>Submit</button>
    </form>
  );
};

// ItemForm.propTypes = {}

export default ItemForm;
