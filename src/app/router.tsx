import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        // element: <HomePage />, // To-do: Create HomePage component
      },

      {
        // element: <GuestGuard />, // To-do: Create GuestGuard component
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
