import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FavoritePage from "./pages/FavoritePage";
import DetailPage from "./pages/DetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import { MealType } from "./api/type/MealType";

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
        path: '/categories',
        element: <CategoriesPage />,
        loader: async ({ request }) => {
          const { searchParams } = new URL(request.url);
          const category = searchParams.get('category');
          if (!category) {
            throw new Error('Category not found');
          }

          const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
          const data = await res.json();
          return data.meals as MealType[];
        }
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
