import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './bookList';

describe('BookList component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
