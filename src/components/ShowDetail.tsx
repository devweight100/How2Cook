import { detailMeal } from "@/api/type/MealId";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";

interface ShowDetailProps {
  props: detailMeal;
}

export default function ShowDetail({ props }: ShowDetailProps) {
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
  return (
    <div>
      <div className="flex justify-center w-[30%] mx-auto pb-5">
        <img
          className="rounded-3xl"
          src={props.strMealThumb}
          alt={props.strMeal}
        />
      </div>

      <div className="flex justify-center my-5">
        <h1 className="text-3xl cursor-pointer pl-10 font-patrick text-[#645414]">
          {props.strMeal}
        </h1>
      </div>

      <p className="indent-20 font-patrick text-[#493f18]">
        {" "}
        {props.strInstructions}
      </p>
      {props.strYoutube && (
        <div className="flex items-center flex-col py-10 font-patrick  text-[#645414] text-xl">
          <h2 className="pb-5">Recipe Video</h2>
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
      {ingredients.length > 0 ? (
        <div className="mt-2 text-center px-60">
          <h1 className="text-2xl underline text-bold font-patrick text-amber-900">
            Ingredients Table
          </h1>
          <Table className="p-5 my-5 text-center border-2 border-collapse border-solid border-amber-700">
            <TableHeader className="text-xl border-2 border-collapse border-solid font-patrick text-bold text-amber-700 border-amber-700">
              <TableCell className="border-2 border-solid border-amber-700">
                Ingredients
              </TableCell>
              <TableCell>Measure</TableCell>
            </TableHeader>
            <TableBody className="text-base font-patrick text-[#493f18] ">
              {ingredients.map((ingre) => (
                <TableRow key={ingre?.ingredient} className="border-0">
                  <TableCell className="border-solid border-x border-amber-700">
                    <div className="flex justify-center">
                      <img
                        src={`https://www.themealdb.com/images/ingredients/${ingre?.ingredient}-Small.png`}
                      />
                    </div>
                    <div>{ingre?.ingredient}</div>
                  </TableCell>
                  <TableCell>{ingre?.measure}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : null}
    </div>
  );
}
