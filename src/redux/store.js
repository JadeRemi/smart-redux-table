import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleWare from "redux-thunk"

import tableReducer from './table_reducer';

let reducers = combineReducers({
  table: tableReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;