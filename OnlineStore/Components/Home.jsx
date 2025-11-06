import "../Css/ProductCard.css";
import { apiData } from "./API/api";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import FilterableProduct from "./FilterableProduct";
import Loading from "./Loading";
import "../Css/Loading.css";
const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiData();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="main">
          <>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </>
        </div>
      ) : (
        <FilterableProduct query={query} product={product} />
      )}
    </>
  );
};
export default Home;
