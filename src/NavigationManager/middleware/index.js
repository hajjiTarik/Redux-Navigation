import navigation from '../';
import * as constants from '../constants';
import { getPreviousPathSelector } from '../selector';

function actionHandler(type, action, cb){
  if (type === action.type) cb();
  return false;
}
function openPage({ page }, store) {
  if (!page) return false;
  store.dispatch({ type: 'CURRENT', page });
  return ()=>{
    navigation.handleOpen(page, getPreviousPath());
  };
}
const navigationMiddleware = store => next => (action) => {
  actionHandler(constants.NAVIGATION_CLOSE_PAGE, action, openPage(action, store));

  return next(action);
};

export default navigationMiddleware;
