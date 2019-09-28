import React from 'react';
import Search from './Search';
import RestaurantList from './RestaurantList';

class SearchAndList extends React.Component {
  constructor() {
    super();
    this.state = {
      zipcode: '',
      cuisine: '',
    };

    this.searchRestaurant = this.searchRestaurant.bind(this);
  }

  searchRestaurant(e, queries) {
    e.preventDefault();
    // should axios to server and api to yelp to get results. 
    // state to be compliant with the yelp search results
    console.log(queries);
  }

  render() {
    return (
      <div id="search-and-list">
        <Search searchRestaurant={this.searchRestaurant}/>
        <RestaurantList />
      </div>
    )
  }
}

export default SearchAndList;
