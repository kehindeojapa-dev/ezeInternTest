//reducer function
export const initialState = {
  searchTerms: [],
  mainData: [],
  minPrice: "",
  maxPrice: "",
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ORIGINAL_DATA":
      return {
        ...state,
        mainData: action.value,
      };
    case "SEARCH_TERM":
      return {
        ...state,
        searchTerms: action.value,
      };

    case "MIN_MAX VALUES":
      return {
        ...state,
        minPrice: action.value.minValue,
        maxPrice: action.value.maxValue,
      };
    default:
      return state;
  }
};

export default reducer;
