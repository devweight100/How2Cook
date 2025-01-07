import { useLoaderData } from "react-router-dom";
import CardMeal from "@/components/CardMeal";
import { MealType } from "@/api/type/MealType";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  const data:{meal:MealType[],category:string} = useLoaderData();
  const [loading, setLoading] = useState(true);
  const meals = data.meal
  const card = meals.map((meal) => <CardMeal key={meal.idMeal} meal={meal} />);
  
  useEffect(() => {
    if (card.length !== 0) {
      setLoading(false);
    }
  }, [meals.length]);
  return (
    <div className="bg-[#f6e5bf] mx-auto flex justify-center container p-12 w-full rounded-b-3xl flex-col">
      <div className="w-full text-center font-patrick font-bold text-3xl mb-10 text-amber-900 underline underline-offset-4">
        <h1>{`${data.category} Categories`}</h1>
      </div>
      <div className="flex flex-wrap items-center w-full gap-10 mx-auto justify-center">
        {loading ? "Loading..." : card}
      </div>
    </div>
  );
};

export default CategoriesPage;
