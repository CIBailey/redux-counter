// make sure to create the initial state above the reducer
const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  //get the outut of the action here by
  //console.log(action)
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };

    default:
      //always return a state (a fallback)
      return state;
  }
}

//NOTE: DO NOT CHANGE THE STATE
//Example would be:
// case 'INCREMENT':
// state.count++
// return state

export { reducer, initialState };
