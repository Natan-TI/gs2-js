import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/home";
import { Login } from "./components/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/home", element: <Home /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
