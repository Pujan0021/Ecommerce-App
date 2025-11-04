import "../CSS/Products.css";
function EcommerceList({ product, searchQuery }) {
  const filteredProducts = product.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      {filteredProducts.length === 0 ? (
        <h3 className="noItems">No item Found ...!</h3>
      ) : (
        <div className="mainContainer">
          {filteredProducts.map((product, index) => (
            <div className="container" key={index}>
              <img className="productImage" src={product.image} alt="" />
              <p className="productName">
                {product.title.split(" ").slice(0, 3).join(" ")}
              </p>
              <p className="productPrice">Rs {product.price}</p>
              <p className="productDescription">
                {product.description.split(" ").slice(0, 8).join(" ") +
                  "......"}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default EcommerceList;
