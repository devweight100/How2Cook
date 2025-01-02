import React, { useEffect, useState } from "react";
import { getMeal } from "@/api/getMeal";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface CATEGORIES {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

function ShowMeal() {
  const [meal, setMeal] = useState<CATEGORIES[]>([]);
  const [loading, setLoading] = useState(true);

  const mealArr = [
    "Beef",
    "Pork",
    "Goat",
    "Lamb",
    "Chicken",
    "Seafood",
    "Pasta",

    "Breakfast",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
    "Dessert",
    "Miscellaneous",
  ];

  useEffect(() => {
    getMeal()
      .then((data) => {
        console.log(data);
        setMeal(data.categories);
      })
      .then(() => {
        if (meal.length !== 0) {
          const sortMeal = meal.sort((a, b) => {
            return (
              mealArr.indexOf(a.strCategory) - mealArr.indexOf(b.strCategory)
            );
          });
          setMeal(sortMeal);
          setLoading(false);
        }
      });
  }, [meal.length]);

  const mealList = meal.map((item: CATEGORIES) => {
    return (
      <Card
        key={item.idCategory}
        className="border-[#bea379] bg-[#e6d8b1] border-4 border-solid p-4 flex flex-col w-72 h-100"
      >
        <CardHeader className="flex flex-col">
          <img
            className="w-56 rounded-lg"
            src={`/src/img/${item.strCategory}.png`}
            alt={item.strCategory}
          />
          <CardTitle className="text-2xl text-center cursor-pointer pl-4 font-patrick  text-[#735e3c]">
            {item.strCategory}
          </CardTitle>
          <CardDescription className="text-sm text-[#9d784a] text-left">
            {item.strCategoryDescription.length > 80
              ? item.strCategoryDescription.slice(0, 80).concat("...")
              : item.strCategoryDescription}
          </CardDescription>
        </CardHeader>

        <CardFooter className="relative h-full">
          <Button className="absolute bottom-0 right-0 bg-[#9d784a] border-[#b39561] cursor-pointer hover:bg-yellow-700 border-solid border-2">
            VIEW MEAL
          </Button>
        </CardFooter>
      </Card>
    );
  });
  return (
    <div className="flex flex-wrap gap-11">
      {loading ? "Loading..." : mealList}
    </div>
  );
}

export default ShowMeal;
