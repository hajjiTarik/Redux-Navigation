import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import navigationMiddleware from '../../../src/NavigationManager/middleware';

export default createStore(reducer, {}, applyMiddleware(navigationMiddleware));