import React from 'react';
import { storiesOf } from '@storybook/react';

// import ReduxApp from '../07/ReduxApp01';
import ReduxApp from '../07/ReduxApp02';

storiesOf('ReduxApp', module).addWithJSX('기본 예제', () => <ReduxApp />);
