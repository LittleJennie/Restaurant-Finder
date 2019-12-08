import React from 'react';

const RestaurantItem = ({
  image_url,
  location,
  name,
  url,
  phone,
  coordinates,
  price,
  rating,
}) => {
  return (
    <div>
      <h3>
        <a 
          href={url}
          target="_blank"
        >
          {name}
        </a>
      </h3>
      <div>
        <img
          className="restaurant-thumbnail-img"
          src={image_url}
          alt={`${name}-image`}
        />
        <div>
          <div>
            <span className="list-item-title">Address: </span>
            <span>{`${location[0]}, ${location[1]}`}</span>
          </div>
          <div>
            <span className="list-item-title">Phone Number: </span>
            <span>{phone}</span>
          </div>
          <div>
            <span className="list-item-title">Price: </span>
            <span>{price}</span>
          </div>
          <div>
            <span className="list-item-title">Rating: </span>
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RestaurantItem;
