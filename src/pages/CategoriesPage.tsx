import { useLoaderData } from "react-router-dom";
import CardMeal from "@/components/CardMeal";
import { MealType } from "@/api/type/MealType";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  const data: MealType[] = useLoaderData();
  const [loading, setLoading] = useState(true);

  const card = data.map((meal) => <CardMeal key={meal.idMeal} meal={meal} />);

  useEffect(() => {
    if (card.length !== 0) {
      setLoading(false);
    }
  }, [data.length]);
  return (
    <div className="bg-[#f6e5bf] mx-auto flex justify-center container p-12 w-full rounded-b-3xl">
      <div className="flex flex-wrap items-center w-full gap-10 mx-auto justify-center">
        {loading ? "Loading..." : card}
      </div>
    </div>
  );
};

export default CategoriesPage;
