import React, { Component } from 'react';

class PrintType extends Component {
  render() {
    return (
      <React.Fragment>
        <select
          onChange={event => this.props.printFilter(event.target.value)}
          name='printtype'
        >
          <option value='all'>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
      </React.Fragment>
    );
  }
}

export default PrintType;
