import { ADD_DATA, REMOVE_DATA } from "./watchlistType";

const initialState = []

const watchlistReducer = (state = [], action) => {
  const { type, data } = action;

  switch (type) {
    case ADD_DATA:
      return [...state, action.data];

    case REMOVE_DATA:
      return state.filter((groupReducer) => groupReducer[0] !== action.data[0]);

    default:
  }
  return state;
};

export default watchlistReducer;
