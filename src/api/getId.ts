import { MealId } from "./type/MealType";

import type { Params } from "react-router-dom";

export async function getId({ params }: { params: Params }): Promise<MealId> {
  const id = params.id;

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();

  return data.meals[0] as MealId;
}
