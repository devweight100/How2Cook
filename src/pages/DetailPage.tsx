import { useLoaderData } from "react-router-dom";
import { detailMeal } from "@/api/type/MealType";
import ShowDetail from "@/components/ShowDetail";
import { useEffect, useState } from "react";

const DetailPage = () => {
  const data = useLoaderData<detailMeal>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [detail, setDetail] = useState<JSX.Element | null>(null)
  
 useEffect(() => {
  
   setLoading(true)
   const timeout = setTimeout(() => {
     setDetail(<ShowDetail props={data} />);
     setLoading(false);
   }, 200); 
   return () => clearTimeout(timeout);
 }, [data]);
  return (
    <div className="bg-[#f6e5bf] lg:p-10 flex justify-center container w-full rounded-b-3xl ">
      {loading ? "Loading" : detail}
    </div>
  );
};

export default DetailPage;
