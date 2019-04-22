import React, { Component } from 'react';

class PrintType extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor='printType'>Print Type:</label>
        <select name='printType'>
          <option value='all'>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
      </React.Fragment>
    );
  }
}

export default PrintType;
