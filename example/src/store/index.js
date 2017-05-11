import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import navigationMiddlware from '../../../src/NavigationManager/middleware';

export default createStore(reducer, {}, applyMiddleware(navigationMiddlware));