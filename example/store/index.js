import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import navigation from '../../src';

export default class ConfigureStore {
  constructor(preloadedState = {}) {
    const middlewares = [navigation.navigationMiddleware];
    let composeEnhancers = compose;

    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
    }
    const enhancer = applyMiddleware(...middlewares);
    const store = createStore(
      reducer,
      preloadedState,
      composeEnhancers(enhancer),
    );
    this.hmrReducers();

    Object.assign(this, store);
  }

  hmrReducers = () => {
    if (module.hot && process.env.NODE_ENV === 'development') {
      module.hot.accept('./reducers', () => {
        this.replaceReducer(require('./reducers')); // eslint-disable-line global-require
      });
    }
  }
}