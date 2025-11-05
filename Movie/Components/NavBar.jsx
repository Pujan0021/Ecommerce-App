import SearchBar from "./SearchBar";
import "../CSS/NavBar.css";
function NavBar({ onSearch }) {
  return (
    <>
      <div className="navBar">
        <ul className="listItems">
          <li>
            <a href="#">LoGo</a>
          </li>
          <li>
            <SearchBar onSearch={onSearch}></SearchBar>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Favorite</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
