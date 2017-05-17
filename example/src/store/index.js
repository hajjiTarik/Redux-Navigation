import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import navigationMiddleware from '../../../src/middleware';

export default createStore(reducer, {}, applyMiddleware(navigationMiddleware));