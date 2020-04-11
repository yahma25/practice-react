import React from 'react';
import { storiesOf } from '@storybook/react';

// import ReduxApp from '../07/ReduxApp01';
// import ReduxApp from '../07/ReduxApp02';
import ReduxApp from '../07/ReduxApp03';
// import AdvReduxApp from '../07/AdvReduxApp01';
// import AdvReduxApp from '../07/AdvReduxApp02';
// import AdvReduxApp from '../07/AdvReduxApp04';
// import AdvReduxApp from '../07/AdvReduxApp05';
// import AdvReduxApp from '../07/AdvReduxApp06';
import AdvReduxApp from '../07/AdvReduxApp07';

storiesOf('ReduxApp', module)
  .addWithJSX('기본 예제', () => <ReduxApp />)
  .addWithJSX('AdvReduxApp', () => <AdvReduxApp />);
