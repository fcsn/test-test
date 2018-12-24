import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as modules from './modules';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducers = combineReducers(modules);
const logger = createLogger();

const configure = () => createStore(reducers, applyMiddleware(logger, ReduxThunk));

export default configure;