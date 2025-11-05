import { useState, useEffect } from "react";
import EcommerceList from "./Components/EcommerceList";
import { fetchApi } from "../API/api";
import NavBar from "./Components/Navbar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState(null);
  useEffect(() => {
    fetchApi()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrors("Failed to fetch API");
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h3 className="loading">Loading Please Wait!..........</h3>;
  }
  if (error) {
    return <h3>Error Occured</h3>;
  }
  return (
    <div>
      <NavBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      ></NavBar>
      {/* <FilterProducts
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      /> */}
      <EcommerceList searchQuery={searchQuery} product={products} />
    </div>
  );
}
export default App;
