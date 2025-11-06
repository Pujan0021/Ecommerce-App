import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
const App = ({ onSearch }) => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
