import {
  NAVIGATION_BROWSER_BACK,
  NAVIGATION_CLOSE_PAGE,
  NAVIGATION_OPEN_PAGE,
  NAVIGATION_CURRENT_ROUTE,
} from '../../constants';

/**
 * @param {object} page
 * @param {string} pageId
 * @param {boolean} origin
 */
export const openPage = (page, origin) => ({
  type: NAVIGATION_OPEN_PAGE,
  page,
  origin,
});


/**
 * @param {object} page
 * @param {string} pageId
 */
export const closePage = page => ({
  type: NAVIGATION_CLOSE_PAGE,
  page,
});

export const back = () => ({
  type: NAVIGATION_BROWSER_BACK,
});

export const setCurrentRoute = route => ({
  type: NAVIGATION_CURRENT_ROUTE,
  route,
});

