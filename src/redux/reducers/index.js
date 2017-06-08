import {
  NAVIGATION_BROWSER_BACK,
  NAVIGATION_CLOSE_PAGE,
  NAVIGATION_OPEN_PAGE,
  NAVIGATION_CURRENT_ROUTE,
} from '../../constants';

export default (
  state = {
    navigation: [],
    route: '',
  }, action) => {
  switch (action.type) {
    case NAVIGATION_OPEN_PAGE :
      return {
        ...state,
        navigation: [
          ...state.navigation,
          {
            pageId: action.page.pageId,
            ...action.page,
          },
        ],
      };
    case NAVIGATION_CURRENT_ROUTE:
      return {
        ...state,
        route: action.route,
      };
    case NAVIGATION_CLOSE_PAGE :
      return {
        ...state,
        navigation: state.navigation.filter(page => page.pageId !== action.page.pageId),
      };
    case NAVIGATION_BROWSER_BACK :
      return {
        ...state,
        navigation: state.navigation.filter((page, index, arr) => index !== arr.length - 1),
      };
    default :
      return state;
  }
};