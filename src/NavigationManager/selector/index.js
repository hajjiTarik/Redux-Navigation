export const getPreviousPathSelector = state => {
  if (!state.router) return false;
  return state.router.currentRoute;
}