import React from 'react';
import axios from 'axios';
import Search from './Search';
import RestaurantList from './RestaurantList';

class SearchAndList extends React.Component {
  constructor(props) {
    super(props);
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
        this.setState({
          restaurants: data,
        });
        return data;
      })
      .then(data => this.props.updateRestaurantLists(data))
      .catch(err => console.log(err));
  }

  render() {
    const { restaurants } = this.state;

    return (
      <div id="search-and-list">
        <Search searchRestaurant={this.searchRestaurant}/>
        <RestaurantList restaurants={restaurants}/>
      </div>
    );
  }
}

export default SearchAndList;
