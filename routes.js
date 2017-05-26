import React from 'react';
import { Route } from 'react-router';
import PageAView from './pageA';
import PageBView from './pageB';

export default (
  <Route>
    <Route path="/xxx/xxx/pageA" component={PageAView} />
    <Route path="/xxx/xxx/pageB" component={PageBView} />
  </Route>
);
