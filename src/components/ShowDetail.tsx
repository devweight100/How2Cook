import { detailMeal } from "@/api/type/MealId";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import { useState, useContext, useEffect } from "react";
import MealContext, { MealContextType } from "./context/Meals";

interface ShowDetailProps {
  props: detailMeal;
}

export default function ShowDetail({ props }: ShowDetailProps) {
  const AREA = {
    America: "us",
    British: "uk",
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

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikeIds([...likeIds, props]);
    } else {
      setLikeIds(likeIds.filter((ele) => ele.idMeal !== props.idMeal));
    }
  };
  useEffect(() => {
    // console.log(likeIds);
    if (likeIds.some((like) => like.idMeal === props.idMeal)) {
      setIsLiked(true);
    }
  }, [likeIds.length]);
  return (
    <div>
      <div className="flex">
        <div className="w-[70%] pr-16">
          <div className="flex justify-center my-5">
            <img
              src={`https://www.themealdb.com/images/icons/flags/big/64/${flag}.png`}
            />
            <h1 className="text-2xl pl-10 font-patrick cursor-default flex justify-center items-center text-[#645414]">
              {props.strMeal}
            </h1>

            <div
              className="flex items-center mx-2 cursor-pointer"
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

          <p className="indent-20 font-patrick text-sm text-[#493f18]">
            {" "}
            {props.strInstructions}
          </p>
          {props.strYoutube && (
            <div className="flex items-center flex-col pt-5 font-patrick  text-[#645414] text-xl">
              <iframe
                width="672"
                height="378"
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
        <div className="w-[30%]">
          {ingredients.length > 0 ? (
            <div className="">
              <Table className="p-5 mb-5 border-2 mx-auto w-[100%] border-solid border-amber-700">
                <TableHeader className="text-base border-2 border-collapse border-solid font-patrick text-bold text-amber-700 border-amber-700">
                  <TableRow>
                    <TableCell className="text-center">Ingredients</TableCell>
                    <TableCell className="text-center">Measure</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-base font-patrick text-[#493f18] ">
                  {ingredients.map((ingre, i) => (
                    <TableRow
                      key={ingre?.ingredient?.concat(`${i}`)}
                      className="h-0 border-b-0"
                    >
                      <TableCell className="flex p-2 text-center">
                        <div className="flex justify-center mx-6">
                          <img
                            className="object-cover w-12"
                            src={`https://www.themealdb.com/images/ingredients/${ingre?.ingredient}-Small.png`}
                          />
                        </div>
                        <div className="flex items-center justify-start text-sm">
                          {ingre?.ingredient}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-center">
                        {ingre?.measure}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {/* <div className="container w-screen overflow-x-hidden">
            <Table className="w-full max-w-full p-5 mx-auto my-5 overflow-hidden border-2 border-solid border-amber-700">
              <TableHeader className="text-lg font-bold border-2 border-collapse border-solid font-patrick text-amber-700 border-amber-700"></TableHeader>
              <TableBody className="text-base font-patrick text-[#493f18]">
                <TableRow>
                  <TableCell className="text-center">Ingredients</TableCell>
                  {ingredients.map((ingre, i) => (
                    <TableCell
                      className="p-2 text-xs text-center"
                      key={ingre?.ingredient?.concat(`${i}`)}
                    >
                      <div className="flex justify-center mx-6">
                        <img
                          className="w-8"
                          src={`https://www.themealdb.com/images/ingredients/${ingre?.ingredient}-Small.png`}
                        />
                      </div>
                      <div>{ingre?.ingredient}</div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">Measure</TableCell>
                  <TableCell>Heel</TableCell>
                  <TableCell>Heel</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div> */}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
