import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FavoritePage from "./pages/FavoritePage";
import DetailPage from "./pages/DetailPage";
import CategoriesPage from "./pages/CategoriesPage";

import getCategory from "./api/getCategory";
import { getId } from "./api/getId";

import { useContext } from "react";
import MealContext,{MealContextType} from "./components/context/Meals";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      }, {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/favorite',
        element: <FavoritePage />,
      
      },
      {
        path: '/detail/:id',
        element: <DetailPage />,
        loader:getId
      }, {
        path: '/categories',
        element: <CategoriesPage />,
        loader: getCategory
      }
    ]
  }
]);

export const App = () => {

  return (
    <div className="flex justify-center bg-amber-100 p-12 min-h-screen w-full">
      <RouterProvider router={router} />
    </div>
  );
};
