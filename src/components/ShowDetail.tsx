import { detailMeal } from "@/api/type/MealType";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import { useState, useContext, useEffect, Fragment } from "react";
import MealContext, { MealContextType } from "./context/Meals";


interface ShowDetailProps {
  props: detailMeal;
}

export default function ShowDetail({ props }: ShowDetailProps) {
  const AREA = {
    American: "us",
    British: "gb",
    Canadian: "ca",
    Chinese: "cn",
    Croatian: "hr",
    Dutch: "nl",
    Egyptian: "eg",
    Filipino: "ph",
    French: "fr",
    Greek: "gr",
    Indian: "in",
    Irish: "ie",
    Italian: "it",
    Jamaican: "jm",
    Japanese: "jp",
    Kenyan: "ke",
    Malaysian: "my",
    Mexican: "mx",
    Moroccan: "ma",
    Polish: "pl",
    Portuguese: "pt",
    Russian: "ru",
    Spanish: "es",
    Thai: "th",
    Tunisian: "tn",
    Turkish: "tr",
    Ukrainian: "ua",
    Unknown: "xx",
    Vietnamese: "vn",
  };

  const flag = AREA[props.strArea as keyof typeof AREA];
  const keyIngredients = Object.keys(props).filter((key) =>
    key.includes("strIngredient")
  ) as Array<keyof detailMeal>;
  const keyMeasure = Object.keys(props).filter((key) =>
    key.includes("strMeasure")
  ) as Array<keyof detailMeal>;

  const ingredients = keyIngredients
    .map((key, i) => {
      const measure = props[keyMeasure[i]]?.trim();
      if (measure) {
        return {
          ingredient: props[key],
          measure: props[keyMeasure[i]],
        };
      }
    })
    .filter(Boolean);

  const [isLiked, setIsLiked] = useState(false);
  const { likeIds, setLikeIds } = useContext<MealContextType>(MealContext);

  const handleLike =async () => {
   setIsLiked(!isLiked);
    if (!isLiked) {
      const list = window.localStorage.getItem("favList");
      const preFav = list ? JSON.parse(list) : [];
      const { idMeal, strMeal, strMealThumb } = props;
      const favId = { idMeal, strMeal, strMealThumb };
      
      const favList = [...preFav,favId]
      window.localStorage.setItem("favList",JSON.stringify(favList))
      const showFav = window.localStorage.getItem("favList")
      setLikeIds(showFav?JSON.parse(showFav):[])
    } else {
          const list = window.localStorage.getItem("favList");
          const favorite: detailMeal[] = list ? JSON.parse(list) : [];
          const newFavorite = favorite.filter((ele) => ele.idMeal !== props.idMeal)
          window.localStorage.setItem("favList", JSON.stringify(newFavorite));
   
         setLikeIds(newFavorite);
        }
  };
  useEffect(() => {
    
    window.scrollTo(0, 0);
    if (likeIds.some((like) => like.idMeal === props.idMeal)) {
      setIsLiked(true);
    } else {
      setIsLiked(false)
    }
  }, [likeIds.length, props]);
  
 
  return (
    <div className="flex flex-col justify-center lg:flex-row px-4">
      <div className="lg:w-[70%] mx-auto lg:pr-16">
        <div className="flex justify-center my-2 lg:my-2">
          {flag !== "xx" && (
            <img
              src={`https://www.themealdb.com/images/icons/flags/big/64/${flag}.png`}
              alt={`${props.strArea}`}
              className="w-[6%]"
            />
          )}
          <h1 className="lg:text-2xl text-xl lg:pl-10 pl-4 font-patrick cursor-default flex justify-center items-center text-[#645414]">
            {props.strMeal}
          </h1>

          <div
            className="flex items-center mx-2 transition-transform duration-300 cursor-pointer hover:scale-110 "
            onClick={() => handleLike()}
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
        </div>

        <div className="flex justify-center w-[40%] mx-auto pb-5">
          <img
            className="rounded-3xl"
            src={props.strMealThumb}
            alt={props.strMeal}
          />
        </div>

        <div className="max-w-full px-5 break-words">
          <p className="indent-20 font-patrick lg:text-sm text-xs text-[#493f18]">
            {props.strInstructions}
          </p>
        </div>

        {props.strYoutube && (
          <div className="flex items-center flex-col pt-5 font-patrick  text-[#645414] text-xl">
            <iframe
              className="w-[288px] h-[162px] lg:w-[560px] lg:h-[315px]"
              src={`https://www.youtube.com/embed/${
                props.strYoutube.split("v=")[1]
              }`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Recipe Video"
            ></iframe>
          </div>
        )}
      </div>
      <div className="lg:w-[30%] font-patrick text-[#645414]">
        {ingredients.length > 0 && (
          <div className="">
            <div className="border-2 mx-auto w-[100%] grid text-center grid-cols-[2fr_1fr] gap-0 border-solid border-amber-700">
              <div className="text-xl py-2 font-bold border-amber-700 border-solid border-b-2 border-r-2">
                Ingredients
              </div>
              <div className="text-xl py-2 font-bold border-b-amber-700 border-solid border-b-2">
                Measure
              </div>
              {ingredients.map((ingre, i) => {
                return (
                  <Fragment key={i}>
                    <div className="flex border-r-amber-700 border-solid border-r-2">
                      <div>
                        <img
                          className="object-cover w-12 m-2 "
                          src={`https://www.themealdb.com/images/ingredients/${ingre?.ingredient}-Small.png`}
                        />
                      </div>
                      <div className="flex justify-center items-center m-3">
                        {ingre?.ingredient}
                      </div>
                    </div>
                    <div className="m-3 flex justify-center items-center">
                      {ingre?.measure}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
