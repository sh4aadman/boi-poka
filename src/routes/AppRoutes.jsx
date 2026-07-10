import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Details from "../pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        loader: async () => fetch("/books.json"),
        Component: Home,
        HydrateFallback: () => (
          <div className="text-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/details/:id",
        Component: Details
      },
    ],
  },
]);

export default router;
