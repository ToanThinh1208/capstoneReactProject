import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import UserLayout from "@/shared/layouts/UserLayout";
import RitualsCatalog from "../features/ritualts/pages/RitualsCatalog";
import RitualDetail from "../features/ritualts/pages/RitualDetail";
import HomePage from "@/features/landing/pages/HomePage";
const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "rituals",
        element: <RitualsCatalog />,
      },
      {
        path: "rituals/:id",
        element: <RitualDetail />,
      },
      {
        path: "login",
        element: (
          <GuestRoute>
            <LoginPage />
          </GuestRoute>
        ),
      },
    ],
  },
]);

export default router;
