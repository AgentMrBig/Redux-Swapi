import {
  GET_CHARACTERS,
  GET_CHARACTERS_FAILURE,
  GET_CHARACTERS_SUCCESS
} from "../actions"; /* we need our action types here*/

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case GET_CHARACTERS:
      return { ...state, fetching: true };
    case GET_CHARACTERS_FAILURE:
      return { ...state, fetching: false, error: action.payload };
    case GET_CHARACTERS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      }
    default:
      return state;
  }
};
