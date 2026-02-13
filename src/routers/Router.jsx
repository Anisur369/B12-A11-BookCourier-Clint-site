import { createBrowserRouter } from "react-router";
// main layout and pages in landing home page
import RootLayout from "../layout/RootLayout.jsx";
import Home from "../pages/home/Home.jsx";
// public pages like about, contact, terms of use, privacy policy
import AllBooks from "../pages/books/AllBooks.jsx";
import BookDetails from "../pages/books/book/BookDetails.jsx";
// private route for protected routes
import PrivateRoute from "./PrivateRoute.jsx";
// authentication layout and pages
import AuthLayout from "../layout/authLayout.jsx";
import Login from "../auth/Login.jsx";
import Register from "../auth/Register.jsx";
import SendParcel from "../pages/sendParcel/SendParcel.jsx";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import MyParcels from "../pages/dashboard/MyParcels.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Profile from "../pages/profile/Profile.jsx";
import UpdateProfile from "../pages/profile/UpdateProfile.jsx";
import MyOrders from "../pages/orders/MyOrders.jsx";
import MyWishlist from "../pages/wishlist/MyWishlist.jsx";
// coverage area page with maps
import Coverage from "../pages/coverage/Coverage.jsx";
// 404 Not found page
import NotFound from "../pages/notFound/NotFound.jsx";
import Payment from "../pages/dashboard/Payment.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/books/${params.id}`),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch("./data/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/maps",
        Component: Coverage,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        index: true,
        Component: Dashboard,
      },
      {
        path: "/dashboard/my-orders",
        Component: MyOrders,
      },
      {
        path: "/dashboard/wishlist",
        Component: MyWishlist,
      },
      {
        path: "/dashboard/profile",
        Component: Profile,
      },
      {
        path: "/dashboard/update-profile",
        Component: UpdateProfile,
      },
      {
        path: "/dashboard/my-parcel",
        Component: MyParcels,
      },
      {
        path: "/dashboard/payment/:parcelId",
        Component: Payment,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
