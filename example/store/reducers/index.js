export default (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE' :
      return { ...state, index: action.index };
    default :
      return { ...state };
  }
}