import React from 'react';
import SearchAndList from './SearchAndList';
import Map from './Map';
import axios from 'axios';
import mapKey from '../../mapKey';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      zipcode: '94158',
      cuisine: 'Japanese',
      mapKey: mapKey,
    }
  }

  render() {
    const { mapKey } = this.state;

    return(
      <div id="outer-wrapper">
        <SearchAndList />
        <Map mapKey={mapKey}/>
      </div>
    )
  }
};

export default App;