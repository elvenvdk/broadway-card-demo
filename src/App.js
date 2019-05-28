import React, { Component } from 'react';

import './App.css';
import Card from './Card';
import TheaterData from './TheaterData.json';

class App extends Component {
  state = {
    listings: TheaterData,
    viewMore: false
  };

  render() {
    return (
      <div className='App'>
        <Card listings={this.state.listings} />
      </div>
    );
  }
}

export default App;
