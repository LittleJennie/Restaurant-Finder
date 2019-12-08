import React from 'react';
import SearchAndList from './SearchAndList';
import Map from './Map';
import mapKey from '../../mapKey';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };

    this.updateRestaurantLists = this.updateRestaurantLists.bind(this);
  }

  updateRestaurantLists(restaurants) {
    this.setState({ restaurants }, () => {
      console.log(this.state)
    });
  }

  render() {
    const { restaurants } = this.state;

    return(
      <div id="outer-wrapper">
        <SearchAndList updateRestaurantLists={this.updateRestaurantLists}/>
        <Map 
          mapKey={mapKey}
          restaurants={restaurants}
        />
      </div>
    )
  }
};

export default App;
