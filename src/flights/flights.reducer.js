import { FLIGHTS_LIST_RECIEVED, INPUT_VALUE_CHANGED } from './flights.actions';

const initialState = {
  flightsList: [],
  value: '',
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED:
      return {
        ...state,
        flightsList: action.payload.flightsList,
      };
    case INPUT_VALUE_CHANGED:
      return {
        ...state,
        value: action.payload.value,
      };
    default:
      return state;
  }
};

export default flightsReducer;
