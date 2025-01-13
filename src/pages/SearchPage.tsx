
import { useLoaderData } from "react-router-dom";
import CardMeal from "@/components/CardMeal";
import { MealType } from "@/api/type/MealType";
import { useState, useEffect } from "react";
import HomePage from "./HomePage";

const SearchPage = () => {
  const dataloader: {data:MealType[],search:string} = useLoaderData();
  const {data,search} = dataloader
  const card = data.map((meal) => <CardMeal key={meal.idMeal} meal={meal} />);
  const [loading, setLoading] = useState<Boolean>(true);
  const [isFound, setIsFound] = useState<Boolean>(true);
  const notFound = <div className="text-xl font-patrick font-bold text-amber-900">Not Found</div>;
 
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
    <div className="bg-[#f6e5bf] mx-auto flex justify-center container pb-12 w-full rounded-b-3xl flex-col">
      <HomePage/>
      <div className="w-full text-center font-patrick font-bold text-3xl mb-10 text-amber-900 underline underline-offset-4">
        <h1>{`Result from: ${search}`}</h1>
      </div>
      <div className="flex flex-wrap items-center w-full gap-10 mx-auto justify-center">
        {loading ? "Loading..." : isFound ? notFound : card}
      </div>
    </div>
  );
};

export default SearchPage;
