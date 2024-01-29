import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "about",
        element: <h1>ABout</h1>,
      },
    ],
  },
]);
