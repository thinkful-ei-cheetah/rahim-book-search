import React, { Component } from 'react';

class PrintType extends Component {
  render() {
    return (
      <React.Fragment>
        <select name='printtype'>
          <option value='print type'>Print Type</option>
          <option value='all'>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
      </React.Fragment>
    );
  }
}

export default PrintType;
