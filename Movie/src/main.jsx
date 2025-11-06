import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Favorite from "../Components/Favorite.jsx";
import Error from "../Components/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Home.jsx";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
    ],
  },
]);

// Mount the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
