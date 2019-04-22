import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form>
        <label htmlFor='search'>Search:</label>
        <input type='text' name='search' />
        <button type='submit'>Search</button>
      </form>
    );
  }
}

export default Search;
