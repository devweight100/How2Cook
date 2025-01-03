import { MealType } from "./type/MealType";

const getCategory = async ({ request }: { request: Request }) => {
   const { searchParams } = new URL(request.url);
   const category = searchParams.get("category");
   if (!category) {
     throw new Error("11111 not found");
   }
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await response.json();

    return data.meals as MealType[];

}

export default getCategory;
