import React from 'react';
import ReactDOM from 'react-dom';
import BookType from './bookType';

describe('BookType component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookType />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
