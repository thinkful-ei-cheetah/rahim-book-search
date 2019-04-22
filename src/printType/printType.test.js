import React from 'react';
import ReactDOM from 'react-dom';
import PrintType from './printType';

describe('PrintType component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PrintType />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
