import { Outlet } from "react-router";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
// Icons
import { ImCart, ImBooks } from "react-icons/im";
// import { FaBookMedical } from "react-icons/fa";
// import { GiBookCover } from "react-icons/gi";
// import { FaBoxArchive } from "react-icons/fa6";
// import { MdOutlinePayments } from "react-icons/md";
// import { BsPersonCircle } from "react-icons/bs";
// import { TbBrowserMaximize, TbWindowMinimize } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";

function DashboardLayout() {
  const { user } = useAuth();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4">
            <b>Name: </b>
            {user?.displayName}
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* home */}
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Home</span>
              </Link>
            </li>
            {/* Dashboard */}
            <li>
              <Link
                to="/dashboard"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard"
              >
                {/* Dashboard icon */}
                <VscGraph size={20} />
                <span className="is-drawer-close:hidden">Dashboard</span>
              </Link>
            </li>
            {/* My Orders */}
            <li>
              <Link
                to="/dashboard/my-orders"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Orders"
              >
                {/* My Orders icon */}
                <ImCart size={20} />
                <span className="is-drawer-close:hidden">My Orders</span>
              </Link>
            </li>
            {/* Wishlist */}
            <li>
              <Link
                to="/dashboard/wishlist"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Wishlist"
              >
                {/* Wishlist icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M12 21l-7 -4 7 4 7 -4 -7 4z"></path>
                  <path d="M3 10l7 -4 7 4"></path>
                </svg>
                <span className="is-drawer-close:hidden">Wishlist</span>
              </Link>
            </li>
            {/* Payments */}
            <li>
              <Link
                to="/payments"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Payments"
              >
                {/* Payments icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M3 15v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5"></path>
                  <path d="M9 18V9"></path>
                  <path d="M15 18V9"></path>
                </svg>
                <span className="is-drawer-close:hidden">Payments</span>
              </Link>
            </li>
            {/* Profile */}
            <li>
              <Link
                to="/dashboard/profile"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Profile"
              >
                {/* Profile icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
                  <path d="M16.5 8c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5z"></path>
                  <path d="M8 8c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Profile</span>
              </Link>
            </li>
            {/* Settings */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
