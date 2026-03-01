import React from "react";
import { useAuthStore } from "@/features/auth/store";
import { Navigate } from "react-router-dom";
interface GuestRouteProps {
  children: React.ReactNode;
}
//children nó nói là cái component có thể nhận tag (component) khác làm con
//react node là tất cả những gì ta thấy trên giao diện

function GuestRoute({ children }: GuestRouteProps) {
  const { accessToken, role } = useAuthStore();
  if (accessToken) {
    const redirectTo = role === "ADMIN" ? "admin" : "/profile";
    return <Navigate to={redirectTo} replace />;
  }
  return <>{children}</>;
}

export default GuestRoute;
