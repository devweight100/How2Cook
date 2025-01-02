import { useLoaderData } from "react-router-dom";
import CardMeal from "@/components/CardMeal";
import { MealType } from "@/api/type/MealType";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  const data: MealType[] = useLoaderData();
  const [loading,setLoading] = useState(true)
  // const card = data.map((meal)=>CardMeal(meal))
  const card = data.map((meal) => <CardMeal key={meal.idMeal} meal={meal} />);
 
  useEffect(() => {
    if (card.length !== 0) {
      setLoading(false)
    }
  },[data.length])
  return (
    <div className="bg-[#f6e5bf] p-20 flex justify-center container w-full rounded-b-3xl">
      <div className="flex flex-wrap w-full px-12 gap-10 items-center ">
       {loading ? "Loading..." : card}
      </div>
    </div>
  );
};

export default CategoriesPage;
