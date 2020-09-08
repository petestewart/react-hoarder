import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import AllStuff from '../../shared/AllStuff/AllStuff';

import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';

import './MyStuff.scss';

// console.warn(authData.getUid());

const MyStuff = (props) => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    itemsData.getItemsByUid(authData.getUid())
      .then((res) => setItems(res))
      .catch((err) => console.error(err));
  };

  useEffect(getItems, []);

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

  const deleteItemHandler = (itemId) => {
    itemsData.deleteItem(itemId)
      .then(() => {
        getItems();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="my-stuff">
      <h1>MY STUFF</h1>
      <div className="btn-group">
        <button className="btn btn-secondary" onClick={editStuffHandler}>Edit</button>
        {/* <button className="btn btn-secondary" onClick={singleItemHandler}>Single</button> */}
      </div>
      <AllStuff items={items} singleItemHandler={singleItemHandler} deleteItemHandler={deleteItemHandler}/>
    </div>
  );
};

// MyStuff.propTypes = {}

export default MyStuff;
