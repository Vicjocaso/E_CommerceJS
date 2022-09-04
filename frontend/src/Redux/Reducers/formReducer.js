import * as actionTypes from "../Constants/formConstants";

export const formReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.POST_FORM_SUCCESS:
      const obj = state.obj.concat(action.payload);
      return {
        ...state,
        obj,
      };

    default:
      return state;
  }
};
