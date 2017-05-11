import exenv from 'exenv';

class NavigationManager {
  constructor() {
    if (!exenv.canUseDOM) return;
    this.navigationPrefix = 'nav';
  }

  /**
   * take navigation object return token
   * @param {Object} data
   * @param {Object} data.pageId
   * @returns {String}
   */
  encodeRouterObj = (data) => {
    const objToString = JSON.stringify(data);
    return window.btoa(objToString);
  }

  /**
   * take navigation token and return navigation object
   * @param {String} url
   * @returns {Object} from a token to describe the current path of the navigation
   */
  decodeRouterUrl = (url) => {
    if (!url) return false;
    const decodeResult = window.atob(url);
    return JSON.parse(decodeResult);
  }

  /**
   * listen on popStateEvent
   * @param {Function} pop
   */
  startListening = (pop) => {
    window.onpopstate = () => {
      pop();
    };
  }

  /**
   * push current state and path into history object
   * @param {String} path
   * @param {String} state
   */
  pushState = (path, state) => {
    history.pushState({
      currentState: state,
    }, '', path);
  }

  /**
   * manage search url
   * @param {String} url
   * @param {String} key
   * @param {String} value
   * @returns {String}
   * @example
   * updateQueryString('www.example.com/?foo=bar','toto',1) -> www.example.com/?foo=bar&toto=1
   * @example
   * updateQueryString('www.example.com/','toto',1) -> www.example.com/?toto=1
   */
  updateQueryString = (url, key, value) => {
    const regexp = new RegExp(`([?&])${key}=.*?(&|#|$)`, 'i');
    let newUrl = url;
    let hash = '';
    if (value === undefined) {
      if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1$2');

      return newUrl;
    }
    if (newUrl.match(regexp)) return newUrl.replace(regexp, `$1${key}=${value}$2`);

    if (newUrl.indexOf('#') !== -1) {
      hash = newUrl.replace(/.*#/, '#');
      newUrl = newUrl.replace(/#.*/, '');
    }
    const separator = newUrl.indexOf('?') !== -1 ? '&' : '?';
    return `${newUrl}${separator}${key}=${value}${hash}`;
  }

  /**
   * take url and return navigation token
   * @param {String} url
   * @param {String} prefix
   * @example getNavigationValue('www.example.com/?nav=eyJwYWdlSWQiOiJGaWx0ZXIifQ==', 'nav')
   * -> eyJwYWdlSWQiOiJGaWx0ZXIifQ
   */
  getNavigationValue = (url, prefix) => url.split('&')
    .filter(value => value.indexOf(prefix) >= 0)
    .toString()
    .split(this.navigationPrefix)[1];

  /**
   * check if history has a navigation token and reformat the url and return it
   * @returns {Object}
   */
  getNavigationFromUrl() {
    const location = window.location;
    if (!location || location.search === '' || location.search === this.navigationPrefix) return false;

    const codeUrl = this.getNavigationValue(location.search, this.navigationPrefix);
    if (!codeUrl) return false;

    return this.decodeRouterUrl(codeUrl.substring(1));
  }

  /**
   * when page is open pushState and update the Query String
   * @param {String} url
   */
  handleOpen(url) {
    if (!url) return;
    const encodeRouterObj = this.encodeRouterObj(url);
    const newUrl = this.updateQueryString(window.location.href, this.navigationPrefix, encodeRouterObj);

    this.pushState(newUrl, newUrl);
  }

  /**
   * when close or back pushState and update the url search
   * @param {String} prevUrl
   * @param {String} currentUrl
   */
  handleClose(prevUrl, currentUrl) {
    const location = window.location;
    const encodeRouterObjPrevUrl = prevUrl ? this.encodeRouterObj(prevUrl) : '';
    const encodeRouterObjCurrentUrl = currentUrl ? this.encodeRouterObj(currentUrl) : '';
    const query = location.search.toString().replace(encodeRouterObjCurrentUrl, encodeRouterObjPrevUrl);

    this.pushState(`${location.pathname}${query}`, query);
  }
}

export default new NavigationManager();
