import React from 'react';
// import PropTypes from 'prop-types';\

import { useHistory } from 'react-router-dom';

import './ItemCard.scss';

const ItemCard = (props) => {
  const { item } = props;

  const history = useHistory();

  const singleItemHandler = () => {
    console.warn(item.id);
    const url = `/stuff/${item.id}`;
    history.push({
      pathname: url,
      item,
    });
  };

  // const singleItemLink = `/stuff/${item.id}`;

  return (
  // <Link to={singleItemLink}> -- TURNS EVERYTHING IN THE CARD TO A LINK (BAD)
      <div className="ItemCard" onClick={singleItemHandler}>
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={item.itemImage} alt="" />
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
          </div>
        </div>
      </div>
  // </Link>
  );
};

// ItemCard.propTypes = {}

export default ItemCard;
