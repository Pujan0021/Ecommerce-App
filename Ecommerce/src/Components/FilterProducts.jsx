import "../CSS/searchBox.css";
function FilterProducts({ product, searchQuery, setSearchQuery }) {
  return (
    <>
      <div className="search">
        <input
          className="searchBox"
          type="text"
          placeholder="Search items"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </div>
    </>
  );
}
export default FilterProducts;
