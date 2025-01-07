import { useLoaderData } from "react-router-dom";
import { detailMeal } from "@/api/type/MealType";
import ShowDetail from "@/components/ShowDetail";

const DetailPage = () => {
  const data = useLoaderData<detailMeal>();

  return (
    <div className="bg-[#f6e5bf] p-20 flex justify-center container w-full rounded-b-3xl ">
      <ShowDetail props={data} />
    </div>
  );
};

export default DetailPage;
