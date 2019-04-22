import React, { Component } from 'react';
import './App.css';
import Search from './search/search';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header role='header' className='App-header'>
          <h1>GOOGLE BOOK SEARCH</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
