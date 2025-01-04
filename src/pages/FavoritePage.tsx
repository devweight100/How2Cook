import { useContext, useEffect, useState } from "react";

import MealContext,{MealContextType} from "@/components/context/Meals";
import { MealType } from "@/api/type/MealType";
import CardMeal from "@/components/CardMeal";

const FavoritePage = () => { 
    const { likeIds } = useContext<MealContextType>(MealContext);

   
  
    return (
      <div className="bg-[#f6e5bf] p-20 flex justify-center container w-full rounded-b-3xl ">
        <div className="flex flex-wrap w-full px-12 gap-10 items-center justify-center">
          {likeIds.map((meal) => (
            <CardMeal key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
    );
}

export default FavoritePage;