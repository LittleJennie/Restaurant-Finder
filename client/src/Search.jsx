import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      term: '',
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
    const { location, term } = this.state;

    return (
      <form>
        <input 
          name="term" 
          placeholder="Hmmm.. What type of food do I want?"
          value={term}
          onChange={this.updateInput}
        />
        <input 
          name="location" 
          placeholder="Enter the location you want to search for"
          value={location}
          onChange={this.updateInput}
        />
        <button onClick={(e) => this.props.searchRestaurant(e, this.state)}>Search</button>
      </form>
    )
  }
}

export default Search;
