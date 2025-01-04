import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MealType } from "@/api/type/MealType";
import { useEffect, useState } from "react";
import { useContext } from "react";
import MealContext, { MealContextType } from "./context/Meals";
import { Link } from "react-router-dom";

interface CardMealProps {
  meal: MealType;
}

export default function CardMeal({ meal }: CardMealProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { likeIds, setLikeIds } = useContext<MealContextType>(MealContext);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikeIds([...likeIds, meal]);
    } else {
      setLikeIds(likeIds.filter((ele) => ele.idMeal !== meal.idMeal));
    }
  };
  useEffect(() => {
    // console.log(likeIds);
    if (likeIds.some((like) => like.idMeal === meal.idMeal)) {
      setIsLiked(true);
    }
  }, [likeIds.length]);
  // useEffect(() => {

  //   if (isLiked) {
  //     setLikeIds([...likeIds, meal]);
  //   } else if (!isLiked ) {
  //     const updatedLike = likeIds.filter((ele) => ele.idMeal !== meal.idMeal);
  //     console.log(updatedLike);
  //     setLikeIds(updatedLike);
  //   }
  // }, [isLiked]);

  return (
    <Card
      key={meal.idMeal}
      className="border-[#bea379] bg-[#e6d8b1] border-4 border-solid p-4 flex flex-col w-72 h-96"
    >
      <CardHeader className="flex flex-col">
        <Link to={`/detail/${meal.idMeal}`}>
          <img
            className="w-56 rounded-lg"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
        </Link>
        <CardTitle className="text-lg text-center cursor-pointer  font-patrick  text-[#735e3c]">
          {meal.strMeal.length > 36
            ? meal.strMeal.slice(0, 33).concat("...")
            : meal.strMeal}
        </CardTitle>
      </CardHeader>

      <CardFooter className="relative h-full">
        <div
          onClick={() => handleLike()}
          className="absolute bottom-0 hover:cursor-pointer left-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isLiked ? "red" : "none"}
            stroke="red"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M20.8 4.6a5.4 5.4 0 00-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 00-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 000-7.6z" />
          </svg>
        </div>
        <Link to={`/detail/${meal.idMeal}`}>
          <Button className="absolute bottom-0 right-0 bg-[#9d784a] border-[#b39561] cursor-pointer hover:bg-yellow-700 border-solid border-2">
            View Detail
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
