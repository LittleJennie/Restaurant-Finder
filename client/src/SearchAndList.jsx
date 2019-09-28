import React from 'react';
import axios from 'axios';
import Search from './Search';
import RestaurantList from './RestaurantList';

class SearchAndList extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };

    this.searchRestaurant = this.searchRestaurant.bind(this);
  }

  searchRestaurant(e, queries) {
    e.preventDefault();
    axios.get('/searchRestaurants', {
      params: queries,
    })
      .then(({ data }) => {
        console.log('return result: ',data);
        this.setState({
          restaurants: data,
        });
      })
      .catch(err => console.log(err));
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
