import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import AppLayout from './components/AppLayout';
import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';
import NotificationContainer from './containers/NotificationContainer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AsyncMainPage from '../13/AsyncMainPage';
import NotFound from './components/NotFound';
import RouterStateContainer from './containers/RouterStateContainer';

class CoinApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <RouterStateContainer />
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <AsyncMainPage />} />
                <Route path="*" component={NotFound} />
              </Switch>
              <NotificationContainer />
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
