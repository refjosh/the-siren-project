import UserTypes from "./user.types";

const INITIAL_STATE = {
  userCountry: "",
  userPreferredCategories: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SET_COUNTRY:
      return {
        ...state,
        userCountry: action.payload,
        error: null
      };

    case UserTypes.SET_PREFERRED_CATEGORIES:
      return {
        ...state,
        userPreferredCategories: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default userReducer;
