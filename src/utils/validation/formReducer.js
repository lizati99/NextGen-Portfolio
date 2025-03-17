export const INITIAL_VALUES = {
  name: "",
  role: "Client",
  rating: 0,
  comment: "",
  location: "",
  image: null,
  errorMessage: "",
  successMessage: "",
};

export const FORM_ACTIONS={
    SET_INPUT: 'SET_INPUT',
    SET_IMAGE: 'SET_IMAGE',
    SET_RATING: 'SET_RATING',
    SET_ERROR: 'SET_ERROR',
    SET_SUCCESS: 'SET_SUCCESS',
    RESET: 'RESET',
}
export const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.SET_INPUT:
      return { ...state, [action.payload.id]: action.payload.value, errorMessage: action.message, successMessage: "" };

    case FORM_ACTIONS.SET_IMAGE:
      return { ...state, [action.payload.id]: action.payload.value, errorMessage: action.message, successMessage: "" };
      
    case FORM_ACTIONS.SET_RATING:
        return { ...state, [action.payload.id]: action.payload.value, errorMessage: action.message, successMessage: "" };
  
    case FORM_ACTIONS.SET_ERROR:
      return { ...state, errorMessage: action.message, successMessage: "" };

    case FORM_ACTIONS.SET_SUCCESS:
      return { ...state, successMessage: action.message, errorMessage: "" };

    case FORM_ACTIONS.RESET:
      return INITIAL_VALUES;

    default:
      return state;
  }
}
