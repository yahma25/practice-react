import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../04/InputWithStyles';

storiesOf('InputWithStyle', module)
  .addWithJSX('기본 설정', () => <Input name="name" />)
  .addWithJSX('label 예제', () => <Input name="name" label="이름" />)
  .addWithJSX('errorMessage 예제', () => (
    <Input name="name" label="이름" errorMessage="이름을 입력해 주세요" />
  ));
