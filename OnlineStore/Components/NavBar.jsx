import SearchBar from "./SearchBar";
import "../Css/SearchBar.css";
import "../Css/NavBar.css";
const NavBar = ({ onSearch, query }) => {
  return (
    <div>
      <ul className="navBar">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <SearchBar onSearch={query} />
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
