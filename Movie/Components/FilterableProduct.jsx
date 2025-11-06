import "../CSS/FilterableProduct.css";
function FilterableProduct({ product, query }) {
  const filteredProducts = product.filter((item) => {
    const title = item.original_title || item.title || item.name || "";
    return title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.original_title || item.title}
              className="product-image"
            />
            <h3>
              {item.original_title.split(" ").slice(0, 1).join("") ||
                item.title.split(" ").slice(0, 2).join("")}
            </h3>
            <p>{item.overview.split(" ").slice(0, 4).join(" ") + "...."}</p>
            <p>
              <strong>Release Date:</strong> {item.release_date}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {item.vote_average} ({item.vote_count}{" "}
              votes)
            </p>
            <p className="reaction">🤍</p>
          </div>
        ))
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
}

export default FilterableProduct;
