import { useContext, useEffect, useState } from "react";

import MealContext,{MealContextType} from "@/components/context/Meals";
import { MealType } from "@/api/type/MealType";
import CardMeal from "@/components/CardMeal";

const FavoritePage = () => { 
    const { likeIds } = useContext<MealContextType>(MealContext);
   
   
  
    return (
      <div className="bg-[#f6e5bf] p-10 flex justify-center container w-full rounded-b-3xl flex-col">
        <div className="w-full text-center font-patrick font-bold text-3xl mb-10 text-amber-900 underline underline-offset-4">
          <h1>Your Favorite Meals</h1>
        </div>

        <div className="flex flex-wrap w-full px-12 gap-10 items-center justify-center">
          {likeIds.map((meal) => (
            <CardMeal key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
    );
}

export default FavoritePage;