import React from 'react';
import Button from '../04/Button';
import createLoadingConsumer from './createLoadingConsumer';

const DefaultLoadingConsumer = createLoadingConsumer();
const Loading2Consumer = createLoadingConsumer('loading2');

export function ButtonWithConsumer({ children }) {
  return (
    <React.Fragment>
      <DefaultLoadingConsumer
        render={({ loading, setLoading }) => (
          <Button onPress={() => setLoading(!loading)}>
            {loading ? '컨텍스트1 로딩 중' : children}
          </Button>
        )}
      />
      <Loading2Consumer
        render={({ loading, setLoading }) => (
          <Button onPress={() => setLoading(!loading)}>
            {loading ? '컨텍스트2 로딩 중' : children}
          </Button>
        )}
      />
    </React.Fragment>
  );
}
