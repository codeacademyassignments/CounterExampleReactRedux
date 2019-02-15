import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../Action/Counter.actions';
import { combineReducers } from '../../../../Library/Caches/typescript/3.3/node_modules/redux';
// import {combineReducers} from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

const counterApp = combineReducers({
  count: counterReducer,
} );

export default counterApp;
