import {createStore} from 'redux';

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

const store = createStore(reducer);

document.querySelector('.button-increment').addEventListener('click', () => {
  store.dispatch({type: 'inc'})
});
document.querySelector('.button-decrement').addEventListener('click', () => {
  store.dispatch({type: 'dec'})
});
document.querySelector('.button-refresh').addEventListener('click', () => {
  store.dispatch({type: 'rfr'})
});

const update = () => {
  document.querySelector('.counter').textContent = store.getState()
}

store.subscribe(update);