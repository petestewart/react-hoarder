import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import itemsData from '../../../helpers/data/itemsData';

import './Single.scss';

const Single = (props) => {
  const { itemId } = props.match.params;
  const { item } = props.location;

  const allStuffLink = '/stuff';

  const deleteItemHandler = (e) => {
    e.preventDefault();
    itemsData.deleteItem(itemId)
      .then(() => {
        props.history.push(allStuffLink);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="SingleItem">
        <div className="single-item-card">
          <span className="ml-auto"><Link to={allStuffLink}><i class="fas fa-times-circle"></i></Link></span>
          <h2>{item.itemName}</h2>
          <img src={item.itemImage} alt=""/>
          <p>{item.itemDescription}</p>
          <button onClick={deleteItemHandler}>Delete Item</button>
        </div>
      </div>
  );
};

// Single.propTypes = {}

export default Single;
