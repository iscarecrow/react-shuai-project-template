import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createJumpstateMiddleware } from '@youzan/shuai';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import states from './states';

const store = createStore(
  states,
  applyMiddleware(
    createJumpstateMiddleware()
  )
);

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
