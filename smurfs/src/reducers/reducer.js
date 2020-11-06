import {GET_SMURFS} from '../actions/getSmurfs';
import {ADD_SMURFS} from '../actions/addSmurfs';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS: 
      return action.payload;
    case ADD_SMURFS:
      return action.payload;
    default: return state;
  }
}

export default reducer;




   