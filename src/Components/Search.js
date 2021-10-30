import { useState } from "react";
import { useStateValue } from "../StateProvider";
//Style
import "./Styles/Search.css";

function Search() {
  const [state, dispatch] = useStateValue();

  const [searchText, setSearchText] = useState("");

  // Function to get search text with the use of regular expression
  // Sepearate each text with comma
  const getSearchText = (e) => {
    e.preventDefault();
    let searchTerms = searchText.split(/,/);
    dispatch({
      type: "SEARCH_TERM",
      value: searchTerms,
    });
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={getSearchText}>
        <input
          type="text"
          placeholder="search for phones(e.g. Iphone Xs, b2, 64gB)"
          className="search__form__searchInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input
          type="submit"
          value="SEARCH"
          className="search__form__searchBtn"
        />
      </form>
    </div>
  );
}

export default Search;
