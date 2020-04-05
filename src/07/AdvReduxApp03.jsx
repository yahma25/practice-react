import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './action/collectionActions01';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'Kim', age: 32 },
        { id: 2, name: 'Lee', age: 17 }
      ])
    );
  }

  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default AdvReduxApp;
