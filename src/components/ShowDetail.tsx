import { detailMeal } from "@/api/type/MealId"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
interface ShowDetailProps { 
    props:detailMeal
}

export default function ShowDetail({ props }: ShowDetailProps) {
    console.log(props)
    const Ingredients = Object.keys(props).filter((key) => key.includes('strIngredient')) as Array<keyof detailMeal>
     const Measure = Object.keys(props).filter((key) =>
       key.includes("strMeasure")
     ) as Array<keyof detailMeal>;
 
  return (
    <div>
      <div className="flex justify-center w-[30%] mx-auto">
        <img src={props.strMealThumb} alt={props.strMeal} />
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
      <Table className="w-[50%] mx-auto h-[50%] text-center">
        
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ingredien</TableHead>
            <TableHead>Measure</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Ingredients.map((key,i) => (
            <TableRow key={key}>
                  <TableCell>{props[key]}</TableCell>
                  <TableCell>{props[Measure[i]]}</TableCell>
            </TableRow>
          ))}
         
        </TableBody>
      </Table>
    </div>
  );
}