//reducer function
export const initialState = {
  searchTerms: [],
  searchResult: [],
  minPrice: 0,
  maxPrice: 2000,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SEARCH_TERM":
      return {
        ...state,
        searchTerms: action.value,
      };
    case "SEARCH_RESULT":
      return {
        ...state,
        searchResult: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
