import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import FavoritePage from "./pages/FavoritePage";
import DetailPage from "./pages/DetailPage";
import CategoriesPage from "./pages/CategoriesPage";


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
        element: <DetailPage />
      }, {
        path: '/categories/:category',
        element: <CategoriesPage />
      }
    ]
  }
]);

export const App = () => {

  return (
    <div className="flex justify-center bg-amber-100 p-12 h-100">
     <RouterProvider router={router}/>
    </div>
  );
};
