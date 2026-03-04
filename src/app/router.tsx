import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import UserLayout from "@/shared/layouts/UserLayout";
import RitualsCatalog from "../features/ritualts/pages/RitualsCatalog";
import RitualDetail from "../features/ritualts/pages/RitualDetail";
import HomePage from "@/features/landing/pages/HomePage";
import GuestRoute from "@/shared/components/common/GuestRoute";
import UnauthorizedPage from "@/shared/pages/UnauthorizedPage";
import ProfilePage from "@/features/users/pages/ProfilePages";
import ProtectedRoute from "@/shared/components/common/ProtectedRoute";
import NotFoundPage from "@/shared/pages/NotFoundPage";
import AdminLayout from "@/shared/layouts/AdminLayout";
import DashBoardPage from "@/features/dashboard/pages/DashBoardPage";
import ManageRitualList from "@/features/ritualts/pages/ManageRitualList";
import ManageCreateRitual from "@/features/ritualts/pages/ManageCreateRitual";
import ManageEditRitualEdit from "@/features/ritualts/pages/ManageEditRitualEdit";
import ManageUserList from "@/features/users/pages/ManageUserList";
const router = createBrowserRouter([
  //user route
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
      {
        path: "register",
        element: (
          <GuestRoute>
            <RegisterPage />
          </GuestRoute>
        ),
      },
      {
        path: "unauthorized",
        element: <UnauthorizedPage />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  //admin route
  {
    path: "admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashBoardPage />,
      },
      {
        path: "rituals",
        element: <ManageRitualList />,
      },
      {
        path: "rituals/create",
        element: <ManageCreateRitual />,
      },
      {
        path: "rituals/:id/edit",
        element: <ManageEditRitualEdit />,
      },
      {
        path: "users",
        element: <ManageUserList />,
      },
    ],
  },
]);

export default router;
