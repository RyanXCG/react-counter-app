export const initialState = {
  counters: [0, 0, 0, 0],
};

const reducer = (state, action) => {
  console.log(action);
  let newCounters = [...state.counters];
  switch (action.type) {
    case "PLUS":
      newCounters[action.payload.id]++;
      return {
        ...state,
        counters: newCounters,
      };
    case "MINUS":
      newCounters[action.payload.id]--;
      return {
        ...state,
        counters: newCounters,
      };
    case "DELETE":
      newCounters.splice(action.payload.id, 1);
      return {
        ...state,
        counters: newCounters,
      };
    case "CLEAR":
      newCounters = newCounters.map((val) => 0);
      return {
        ...state,
        counters: newCounters,
      };
    case "RESET":
      return initialState;

    default:
      return state;
  }
};

export default reducer;
