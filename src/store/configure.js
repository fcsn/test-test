import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as modules from './modules';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducers = combineReducers(modules);
const logger = createLogger();

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const componseEnhancers = devtools || compose;
const configure = () => createStore(reducers, applyMiddleware(logger, ReduxThunk));

export default configure;