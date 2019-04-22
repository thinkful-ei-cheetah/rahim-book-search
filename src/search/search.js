import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor='search'>Search:</label>
          <input type='text' name='search' />
          <button type='submit'>Search</button>
        </form>
      </section>
    );
  }
}

export default Search;
