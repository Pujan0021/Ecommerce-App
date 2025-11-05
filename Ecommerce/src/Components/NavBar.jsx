import FilterProducts from "./FilterProducts";
import "../CSS/NavBar.css";
function NavBar({ searchQuery, setSearchQuery }) {
  return (
    <>
      <div className="navbar">
        <ul className="navItems">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">
              <FilterProducts
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              ></FilterProducts>
            </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">LogIn</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
