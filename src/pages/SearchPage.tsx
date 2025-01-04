import { detailMeal, MealId } from "@/api/type/MealId";
import { useLoaderData } from "react-router-dom";
import CardMeal from "@/components/CardMeal";
import { MealType } from "@/api/type/MealType";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const data: MealType[] = useLoaderData();
  const card = data.map((meal) => <CardMeal key={meal.idMeal} meal={meal} />);
  const [loading, setLoading] = useState<Boolean>(true);
  console.log(data);
  useEffect(() => {
    if (card.length !== 0) {
      setLoading(false);
    } else {
      setLoading(false);
      const notFound = "Not Found";
    }
  }, [data.length]);

  return (
    <div className="bg-[#f6e5bf] mx-auto flex justify-center container p-12 w-full rounded-b-3xl">
      <div className="flex flex-wrap items-center w-full gap-10 mx-auto ">
        {loading ? "Loading..." : card}
      </div>
    </div>
  );
};

export default SearchPage;
