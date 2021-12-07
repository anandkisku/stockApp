import { ADD_DATA, REMOVE_DATA } from "./watchlistType";

const addData = (data) => {
  return {
    type: ADD_DATA,
    data: data,
  };
};

const removeData = (data) => {
  return {
    type: REMOVE_DATA,
    data: data,
    
  };
};

export default {
  addData,
  removeData,
};
