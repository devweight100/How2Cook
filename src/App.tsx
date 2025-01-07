import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FavoritePage from "./pages/FavoritePage";
import DetailPage from "./pages/DetailPage";
import CategoriesPage from "./pages/CategoriesPage";

import getCategory from "./api/getCategory";
import { getId } from "./api/getId";

import { getSearch } from "./api/getSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search/:term",
        element: <SearchPage />,
        loader: getSearch,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
        loader: getId,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
        loader: getCategory,
      },
    ],
  },
]);

export const App = () => {
  return (
    <div className="flex justify-center lg:p-12 bg-amber-100 min-h-screen lg:h-full">
      <RouterProvider router={router} />
    </div>
  );
};
