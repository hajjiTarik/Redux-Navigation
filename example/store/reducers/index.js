import { combineReducers } from 'redux';
import router from '../../../src/redux/reducers';

const rootReducer =  (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE' :
      console.log(1);
      return { ...state, index: action.index };
    default :
      return { ...state };
  }
}

export default combineReducers({
  rootReducer,
  router,
})