// let state; //global variable
// It is better to put this variable into a function and not as a global variable bc with state we display our DataCue. To avoid overwriting we need to put it into a function. 
function createStore() {
  let state;
 
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
 
  function getState() {
    return state;
  }
 
  return {
    dispatch,
    getState
  };
};
 
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
 
    default:
      return state;
  }
};
 
function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

// createStore takes the reducer as the argument. This sets the new store's reducer as reducer. When an action is dispatched, it calls the reducer that we passed through when creating the store.
let store = createStore(reducer);
store.dispatch({ type: '@@INIT' });
let button = document.getElementById('button');
 
button.addEventListener('click', () => {
    store.dispatch({ type: 'INCREASE_COUNT' });
})