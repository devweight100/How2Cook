import { de } from "date-fns/locale";
import { detailMeal, MealId } from "./type/MealId";
import { Params } from "react-router-dom";
import { MealType } from "./type/MealType";
interface Par {
  params: Params;
}

export async function getSearch({ params }: Par): Promise<MealType[]> {
  const search = params.term;
  let result: MealType[] = [];
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await res.json();
    result = data.meals.map((meal: detailMeal) => {
      const { idMeal, strMeal, strMealThumb } = meal;
      return { idMeal, strMeal, strMealThumb };
    });
  } catch (error) {
    result = [];
  }

  return result as MealType[];
}
