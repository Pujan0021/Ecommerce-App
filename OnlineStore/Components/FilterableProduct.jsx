import "../Css/ProductCard.css";
const FilterableProduct = ({ product, query }) => {
  const filteredProduct = product.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="mainContainer">
      {filteredProduct.length > 0 ? (
        filteredProduct.map((item) => (
          <div key={item.id} className="product-card">
            <img className="image" src={item.thumbnail} alt={item.title} />
            <h3 className="productName ">{item.title.slice(0, 15)}</h3>
            <p className="price">${item.price}</p>
            <p className="rating">
              {item.rating} ⭐<button className="addToCart">Add to Cart</button>
            </p>
            <p className="description">{item.description.slice(0, 58)}</p>
          </div>
        ))
      ) : (
        <h3>Item no Found</h3>
      )}
    </div>
  );
};

export default FilterableProduct;
