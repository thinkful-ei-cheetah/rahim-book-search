import React, { Component } from 'react';
import './App.css';
import Search from './search/search';
import PrintType from './printType/printType';
import BookType from './bookType/bookType';

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
        <section role='region'>
          <Search />
        </section>
        <section role='region' class='filter-bar'>
          <PrintType />
          <BookType />
        </section>
      </div>
    );
  }
}

export default App;
