import last from '../utils';

export const getCurrentPath = (state) => {
  if (!state.router) return false;
  return state.router.currentRoute;
};
export const getPreviousPath = (state) => {
  if (!state.router) return false;
  return last(state.router.navigation);
};
