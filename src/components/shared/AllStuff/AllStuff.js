import React from 'react';
// import PropTypes from 'prop-types';

import ItemCard from '../ItemCard/ItemCard';

import './AllStuff.scss';

const AllStuff = (props) => {
  const itemCards = (allItems) => {
    const itemList = allItems.map((item) => <ItemCard item={item} key={item.id} singleItemHandler={props.singleItemHandler} />);
    return itemList;
  };

  return (
    <div className="AllStuff">
      {itemCards(props.items)}
    </div>
  );
};

// AllStuff.propTypes = {}

export default AllStuff;
