import "../CSS/searchBox.css";
import { useState } from "react";
function FilterProducts({ setSearchQuery }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="search">
        <input
          className="searchBox"
          placeholder="Search items"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="searchButton"
          onClick={() => setSearchQuery(inputValue)}
        >
          Search
        </button>
      </div>
    </>
  );
}
export default FilterProducts;
