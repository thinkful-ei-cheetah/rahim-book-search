import React, { Component } from 'react';
import BookList from '../bookList/bookList';
import PrintType from '../printType/printType';
import BookType from '../bookType/bookType';

class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <form>
            <label htmlFor='search'>Search:</label>
            <input type='text' name='search' />
            <button type='submit'>Search</button>
          </form>
        </section>
        <section>
          <PrintType />
          <BookType />
        </section>
        <BookList />
      </React.Fragment>
    );
  }
}

export default Search;
