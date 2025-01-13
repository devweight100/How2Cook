import React, { useEffect, useState } from "react";
import { getMeal } from "@/api/getMeal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


interface CATEGORIES {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

function ShowMeal() {
  const [meal, setMeal] = useState<CATEGORIES[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // const [isLiked, setIsLiked] = useState(false);
  const handleView = (c: string) => {
    navigate(`/categories?category=${c}`);
  };

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
        onClick={() => handleView(item.strCategory)}
        key={item.idCategory}
        className="border-[#bea379] bg-[#e6d8b1] border-4 border-solid p-4 flex flex-col w-72 min-h-[415px] transition-transform duration-300  hover:scale-105 cursor-pointer hover:shadow-2xl"
      >
        <CardHeader className="flex flex-col min-h-[352px]">
          <img
            className="w-56 rounded-lg cursor-pointer"
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
          <Button
            className="absolute bottom-0 right-0 bg-[#9d784a] border-[#b39561] cursor-pointer hover:bg-yellow-700 border-solid border-2"
            onClick={() => handleView(item.strCategory)}
          >
            VIEW MEAL
          </Button>
        </CardFooter>
      </Card>
    );
  });




  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-10 mx-auto ">
      {loading ? (
        "Loading..."
      ) : (
        <Carousel className="w-[95%]">
            <CarouselContent>
              {meal.map((item: CATEGORIES) => {
                return (
                  <CarouselItem
                    key={item.idCategory}
                    className="md:basis-1/3 lg:basis-1/5 p-2"
                    onClick={() => handleView(item.strCategory)}
                  >
                    <div className="p-2">
                      <Card className="border-[#bea379] bg-[#e6d8b1] border-4 border-solid p-2 flex flex-col  transition-transform duration-300  hover:scale-105 cursor-pointer hover:shadow-lg min-h-[220px]">
                        <CardContent className="min-h-[113px]">
                          <img
                            className="w-full min-h-[173px] rounded-lg cursor-pointer"
                            src={`/src/img/${item.strCategory}.png`}
                            alt={item.strCategory}
                          />
                        </CardContent>
                        <CardTitle className="text-2xl flex justify-center align-middle pb-3 cursor-pointer  font-patrick  text-[#735e3c]">
                          {item.strCategory}
                        </CardTitle>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
}

export default ShowMeal;
