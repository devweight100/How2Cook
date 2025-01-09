
import { detailMeal,MealType} from "./type/MealType";
import { Params } from "react-router-dom";

interface Par {
  params: Params;
}

export async function getSearch({ params }: Par) {
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

  return {data :result as MealType[],search :search as string};
}
