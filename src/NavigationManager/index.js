class NavigationManager {
  constructor() {
    if (typeof window === 'undefined') return;
    this.navigationPrefix = 'nav';
  }

  /**
   * @param data
   * @description take navigation object return token
   * @returns {*}
   */
  encodeRouterObj = (data) => {
    try {
      const objToString = JSON.stringify(data);
      return window.btoa(objToString);
    } catch (e) {
      console.warn('[router] invalid navigation token');
      return false;
    }
  }

  /**
   * @param code
   * @description take token return navigation object
   * @returns {boolean}
   */
  decodeRouterUrl = (code) => {
    if (!code && code !== '') return false;
    try {
      const decodeResult = window.atob(code);
      return JSON.parse(decodeResult);
    } catch (e) {
      console.warn('[router] invalid navigation token');
      return false;
    }
  }

  /**
   * @description return the search only
   * @example getQueryString('www.exemple.com/?foo=bar') -> 'foo=bar'
   */
  getQueryString = () => window.location.search.substring(0, 1);

  /**
   * @param pop
   * @description listen on popStateEvent
   */
  startListening = (pop) => {
    window.onpopstate = () => {
      pop();
    };
  }

  /**
   * @param path
   * @param state
   * @description push state and path into history obj
   */
  pushState = (path, state) => {
    history.pushState({
      currentState: state,
    }, null, path);
  }

  /**
   * @param uri
   * @param key
   * @param value
   * @returns {*}
   * @description manage queryString
   * @example updateQueryString('www.exemple.com/?foo=bar','toto',1) -> www.exemple.com/?foo=bar&toto=1
   * @example updateQueryString('www.exemple.com/','toto',1) -> www.exemple.com/?toto=1
   */
  updateQueryString = (uri, key, value) => {
    const re = new RegExp(`([?&])${key}=.*?(&|#|$)`, 'i');
    let newUri = uri;
    let hash = '';
    if (value === undefined) {
      if (newUri.match(re)) return newUri.replace(re, '$1$2');

      return newUri;
    }
    if (newUri.match(re)) return newUri.replace(re, `$1${key}=${value}$2`);

    if (newUri.indexOf('#') !== -1) {
      hash = newUri.replace(/.*#/, '#');
      newUri = newUri.replace(/#.*/, '');
    }
    const separator = newUri.indexOf('?') !== -1 ? '&' : '?';
    return `${newUri}${separator}${key}=${value}${hash}`;
  }

  /**
   * @param uri
   * @param prefix
   * @description take uri and return navigation token
   * @example getNavigationValue('www.example.com/?nav=eyJwYWdlSWQiOiJGaWx0ZXIifQ==', 'nav')
   * -> eyJwYWdlSWQiOiJGaWx0ZXIifQ
   */
  getNavigationValue = (uri, prefix) => uri.split('&')
    .filter(value => value.indexOf(prefix) >= 0)
    .toString()
    .split(this.navigationPrefix)[1];

  /**
   * @returns {boolean}
   */
  getNavigationFromUrl() {
    const location = window.location;
    if (!location || location.search === '' || location.search === this.navigationPrefix) return false;

    const codeUrl = this.getNavigationValue(location.search, this.navigationPrefix);

    if (!codeUrl) return false;

    return this.decodeRouterUrl(codeUrl.substring(1));
  }

  /**
   * @param url
   * @description when page is open pushState and update the QueryString
   */
  handleOpen(url) {
    if (!url) return;
    const encodeRouterObj = this.encodeRouterObj(url);
    const newUri = this.updateQueryString(window.location.href, this.navigationPrefix, encodeRouterObj);

    this.pushState(newUri, newUri);
  }

  /**
   * @param prevRoute
   * @param currenRoute
   * @description when close or back pushState and update the QueryString
   */
  handleClose(prevRoute, currenRoute) {
    const location = window.location;
    const encodeRouterObjPrevUrl = prevRoute ? this.encodeRouterObj(prevRoute) : '';
    const encodeRouterObjCurrentRoute = currenRoute ? this.encodeRouterObj(currenRoute) : '';
    const query = location.search.toString().replace(encodeRouterObjCurrentRoute, encodeRouterObjPrevUrl);

    this.pushState(`${location.pathname}${query}`, query);
  }
}

export default new NavigationManager();
