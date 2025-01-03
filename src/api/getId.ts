import { MealId } from "./type/MealId";

export async function getId(id: string):Promise<MealId> {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data as MealId;
}