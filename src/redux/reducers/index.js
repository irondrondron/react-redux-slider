import { combineReducers } from 'redux';

import coverage from './coverage'
import days from './days'
import checkbox from './checkbox'

const rootReducer = combineReducers({
  coverage,
  days,
  checkbox
});

export default rootReducer;