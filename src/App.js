import React, { Component } from 'react';
import './App.css';
import Search from './search/search';
import Filter from './filter/filter';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <header role='header' className='App-header'>
          <h1>GOOGLE BOOK SEARCH</h1>
        </header>
        <Search />
        <Filter />
      </div>
    );
  }
}

export default App;
