import navigation from '../';
import * as constants from '../constants';
import { getPreviousPath, getCurrentPath } from '../selectors';

function actionHandler(type, action, cb){
  if (!type) return false;
  const actionTypes = type instanceof Array ? type : [type];
  actionTypes.map((actionType) => {
    if (actionType === action) return cb();
    return false;
  });
  return true;
}
function openView({ page }, { dispatch }) {
  if (!page) return false;
  return () => {
    dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page });
    navigation.handleOpen(page);
  };
}
function closeView({ page }, store) {
  if (!page) return false;
  const prevPath = getPreviousPath(store.getState());
  const currentPath = getCurrentPath(store.getState());
  return () => {
    store.dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page });
    navigation.handleClose(prevPath, currentPath);
  };
}
const navigationMiddleware = store => next => (action) => {
  actionHandler(constants.NAVIGATION_OPEN_PAGE, action, openView(action, store));
  actionHandler([
    constants.NAVIGATION_CLOSE_PAGE,
    constants.NAVIGATION_BROWSER_BACK,
  ], action, closeView(action, store));
  return next(action);
};

export default navigationMiddleware;
