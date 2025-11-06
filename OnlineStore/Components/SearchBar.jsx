import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(setQuery);
    }
  };

  return (
    <div className="bar">
      <input
        className="searchBox"
        type="text"
        placeholder="Search Product .."
        value={query}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={() => onSearch(setQuery)} className="searchBtn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
