import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import FilterableProduct from "./FilterableProduct";
import { fthApi } from "./API/api";
function Home() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fthApi()
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h3 className="loading">Loading data please wait ......!</h3>;
  }
  if (error) {
    return (
      <h3 className="error">
        Error Occured! Please Try Again after a While .....＞︿＜ !
      </h3>
    );
  }
  return (
    <>
      <div className="filteredProduct">
        <NavBar onSearch={setQuery}></NavBar>
        <FilterableProduct product={product} query={query}></FilterableProduct>
      </div>
    </>
  );
}
export default Home;
