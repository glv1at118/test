import myReducer from './reducers.js';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let reduxStore = createStore(myReducer, composeEnhancers(
    applyMiddleware(thunk)
));
