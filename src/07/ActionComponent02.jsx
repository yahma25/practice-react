import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';

class ActionComponent1 extends PureComponent {
  render() {
    const { setLoading, resetLoading, setUser, setCollection, setAge } = this.props;
    const collection = [
      { id: 1, name: 'Kim', age: 32 },
      { id: 2, name: 'Lee', age: 20 },
      { id: 3, name: 'Mi', age: 55 }
    ];

    return (
      <React.Fragment>
        <Button onPress={() => setLoading(true)}>setLoading</Button>
        <Button onPress={() => resetLoading()}>resetLoading</Button>
        <Button onPress={() => setUser({ name: 'Park', age: 20 })}>setUser</Button>
        <Button onPress={() => setCollection(collection)}>setCollection</Button>
        <Button onPress={() => setAge(2, 77)}>setAge</Button>
      </React.Fragment>
    );
  }
}

ActionComponent1.propTypes = {
  setLoading: PropTypes.func,
  resetLoading: PropTypes.func,
  setUser: PropTypes.func,
  setCollection: PropTypes.func,
  setAge: PropTypes.func
};

export default ActionComponent1;
