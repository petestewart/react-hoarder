import React from 'react';
// import PropTypes from 'prop-types';

import './ItemCard.scss';

const ItemCard = (props) => {
  const { item } = props;

  return (
    <div className="ItemCard">
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={item.itemImage} alt="" />
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
        </div>
      </div>
    </div>
  );
};

// ItemCard.propTypes = {}

export default ItemCard;
