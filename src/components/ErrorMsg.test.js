import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMsg from './ErrorMsg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorMsg />, div);
});
