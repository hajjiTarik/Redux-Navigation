import navigation from '../';
import
function actionHandler(type, action, cb){
  if (type === action.type) cb();
  return false;
}
function closePage({ page }, store) {
  if (!page) return;
  store.dispatch({ type: 'CURRENT', page})
  return ()=>{
    navigation.handleClose()
  }
}
const navigationMiddleware = store => next => (action) => {
  actionHandler('CLOSE_PAGE', action, closePage(action, store));

  return next(action);
}

export default navigationMiddleware;
