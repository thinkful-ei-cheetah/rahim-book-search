import React, { Component } from 'react';

class BookType extends Component {
  render() {
    return (
      <React.Fragment>
        <select name='booktype'>
          <option value='book type'>Book Type</option>
          <option value='No Filter'>No Filter</option>
          <option value='ebooks'>ebooks</option>
          <option value='free-ebooks'>free-ebooks</option>
          <option value='full'>full</option>
          <option value='paid-ebooks'>paid-ebooks</option>
          <option value='partial'>partial</option>
        </select>
      </React.Fragment>
    );
  }
}

export default BookType;
