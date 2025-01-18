import {  useEffect, useState } from "react";
import ShowMeal from "../components/ShowMeal";

import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

const HomePage = () => {
   const navigate = useNavigate();
  //  const { likeIds } = useContext<MealContextType>(MealContext);

   const [term, setTerm] = useState<string>("");
   const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     navigate(`/search/${term}`);
     setTerm("");
   };
   useEffect(() => {
     setTerm("");
   }, [navigate]);

  return (
    <div>
      <div className="bg-[#f6e5bf] p-12 mx-auto flex flex-col justify-center container w-full rounded-b-3xl ">
        <ShowMeal />
        <div className="mt-10 bg-[#c9945b] p-5 rounded-xl">
          <form
            onSubmit={handleSubmitSearch}
            className="flex items-center justify-center"
          >
            <div className="w-full mx-4 my-2 lg:w-auto lg:my-0">
              <input
                type="text"
                className="bg-transparent font-patrick text-[#fcf4d3] border-4 border-[#fcf4d3] outline-none lg:w-full w-full p-2 border-solid rounded-lg text-sm lg:text-lg"
                onChange={(e) => setTerm(e.target.value)}
                value={term}
              />
            </div>
            <div className="align-middle lg:mt-0">
              <Button className="bg-[#9d784a] border-[#b39561] cursor-pointer hover:bg-yellow-700 border-solid border-2 lg:text-base text-xs">
                SEARCH
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default HomePage
