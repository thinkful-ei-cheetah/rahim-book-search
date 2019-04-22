import React, { Component } from 'react';
import BookType from '../bookType/bookType';
import PrintType from '../printType/printType';

class Filter extends Component {
  render() {
    return (
      <section className='filter-bar' role='region'>
        <label htmlFor='booktype printtype'>Filter:</label>
        <PrintType />
        <BookType />
      </section>
    );
  }
}

export default Filter;
