import { combineReducers } from 'redux';

import PageAState from './states/pageAState';
import PageBState from './states/pageBState';

export default combineReducers({
  pageA: PageAState,
  pageB: PageBState
});
