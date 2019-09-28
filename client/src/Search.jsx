import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      cuisine: '',
    };

    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    e.preventDefault();
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    const { zipcode, cuisine } = this.state;

    return (
      <form>
        <input 
          name="cuisine" 
          placeholder="Hmmm.. What type of food do I want?"
          value={cuisine}
          onChange={this.updateInput}
        />
        <input 
          name="zipcode" 
          placeholder="Enter the zipcode you want to search for"
          value={zipcode}
          onChange={this.updateInput}
        />
        <button onClick={(e) => this.props.searchRestaurant(e, this.state)}>Search</button>
      </form>
    )
  }
}

export default Search;
