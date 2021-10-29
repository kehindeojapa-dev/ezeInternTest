//Style
import "./Styles/Search.css";

function Search() {
  return (
    <div className="search">
      <form className="search__form">
        <input
          type="text"
          placeholder="search for phones(e.g. Iphone Xs, b2, 64gB)"
          className="search__form__searchInput"
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
