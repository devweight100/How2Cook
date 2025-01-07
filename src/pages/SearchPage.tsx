
import { useLoaderData } from "react-router-dom";
import CardMeal from "@/components/CardMeal";
import { MealType } from "@/api/type/MealType";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const data: MealType[] = useLoaderData();
  const card = data.map((meal) => <CardMeal key={meal.idMeal} meal={meal} />);
  const [loading, setLoading] = useState<Boolean>(true);
  const [isFound, setIsFound] = useState<Boolean>(true);
  const notFound = <div className="text-xl font-patrick font-bold text-amber-900">Not Found</div>;
  // console.log(data);
  useEffect(() => {
    if (card.length !== 0) {
      setLoading(false);
      setIsFound(false);
    } else {
      setLoading(false);
      setIsFound(true);
      
    }
  }, [data.length]);

  return (
    <div className="bg-[#f6e5bf] mx-auto flex justify-center container p-12 w-full rounded-b-3xl">
      <div className="flex flex-wrap items-center w-full gap-10 mx-auto justify-center">
        {loading ? "Loading..." : isFound ? notFound : card}
      </div>
    </div>
  );
};

export default SearchPage;
