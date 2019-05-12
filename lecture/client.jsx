import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import NumberBaseball from "./NumberBaseball";

import Test from './RenderTest';

const Hot = hot(Test);

ReactDom.render(<Hot />, document.querySelector('#root'));
