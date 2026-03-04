import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "@/features/auth/store";
import Logout from "@/features/auth/components/Logout";

export default function Header() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return (
    <header className="bg-[#117cd4] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Logo
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline underline-offset-4"
                : "text-white/80 hover:text-white"
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/rituals"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline underline-offset-4"
                : "text-white/80 hover:text-white"
            }
          >
            Cầu nguyện
          </NavLink>
          {!accessToken && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold underline underline-offset-4"
                  : "text-white/80 hover:text-white"
              }
            >
              Đăng nhập
            </NavLink>
          )}
        </nav>
        <div className="flex items-center gap-4">
          {accessToken ? (
            <Logout />
          ) : (
            <Link
              to="/login"
              className="bg-white text-[#117cd4] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
