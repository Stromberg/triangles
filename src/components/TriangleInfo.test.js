import React from 'react';
import ReactDOM from 'react-dom';
import TriangleInfo from './TriangleInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TriangleInfo />, div);
});
