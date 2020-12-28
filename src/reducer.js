const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'inc': 
      return state + 1;
    case 'dec':
      return state - 1;
    case 'rfr':
      return state - state;
    default:
      return state
    
  }
}

export default reducer;