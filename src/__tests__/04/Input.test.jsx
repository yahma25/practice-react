import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../../03/Input';

describe('<Input>', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input name="name" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
