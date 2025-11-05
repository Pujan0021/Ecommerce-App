import { useState } from "react";
import "../CSS/SearchBar.css";
function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");
  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="SearchBox">
      <input
        className="search"
        type="text"
        placeholder="Search Movie"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="searchBtn" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
}
export default SearchBar;
