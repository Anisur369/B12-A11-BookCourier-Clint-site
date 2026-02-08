import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
