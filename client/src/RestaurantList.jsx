import React from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantItem 
          key={restaurant.id}
          image_url={restaurant.image_url}
          location={restaurant.location.display_address}
          name={restaurant.name}
          url={restaurant.url}
          phone={restaurant.display_phone}
          coordinates={restaurant.coordinates}
          price={restaurant.price}
          rating={restaurant.rating}
        />
      ))}
    </div>
  )
}

export default RestaurantList;
