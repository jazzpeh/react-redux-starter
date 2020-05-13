import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './reducers/counter';
import uiReducer from './reducers/ui';

const rootReducer = combineReducers({
  counter: counterReducer,
  ui: uiReducer,
});

const composeEnchancers = compose;

const configureStore = () =>
  createStore(rootReducer, composeEnchancers(applyMiddleware(thunk)));

export default configureStore;
