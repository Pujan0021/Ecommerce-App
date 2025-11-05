import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import FilterableProduct from "../Components/FilterableProduct";
import { fthApi } from "../Components/API/api";
function App() {
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
      <div>
        <NavBar onSearch={setQuery}></NavBar>
      </div>
      <div className="filteredProduct">
        <FilterableProduct product={product} query={query}></FilterableProduct>
      </div>
    </>
  );
}
export default App;
