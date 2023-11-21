import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Room from "./views/Rooms";

function redirectToLogin() {
  if (!localStorage.access_token) {
    return redirect("/login");
  }
  return null;
}
function redirectAlreadyLogin() {
  if (localStorage.access_token) {
    return redirect("/");
  }
  return null;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Room />,
    loader: redirectToLogin,
  },
  {
    path: "/login",
    element: <Login />,
    loader: redirectAlreadyLogin,
  },
  {
    path: "/register",
    element: <Register />,
    loader: redirectAlreadyLogin,
  },
]);
export default router;
