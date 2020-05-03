import React, { PureComponent } from 'react';
import CoinOverview from './CoinOverview';
import TransactionListContainer from './TransactionListContainer';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverview />
        <TransactionListContainer />
      </React.Fragment>
    );
  }
}

export default MainPage;
