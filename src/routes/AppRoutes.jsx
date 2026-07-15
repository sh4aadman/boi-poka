import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import BookDetails from "../pages/BookDetails/BookDetails";
import Loading from "../components/UI/Loading/Loading";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/books.json"),
        Component: BookDetails,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/listed-books",
        loader: () => fetch("/books.json"),
        Component: ListedBooks,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/pages-to-read",
        loader: () => fetch("/books.json"),
        Component: PagesToRead,
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);

export default router;
