import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>클릭점</button>
      </div>
    );
  }
}

storiesOf('Button', module).addWithJSX('AddOnTest', () => (
  <Button onClick={action('button-click')}>Hello World!</Button>
));
