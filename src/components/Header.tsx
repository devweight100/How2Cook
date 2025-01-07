import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import cheflogo from "../img/cheflogo.png";
import { useState } from "react";
import { getRandom } from "../api/getRandom";
export default function Header() {
  const navigate = useNavigate();
  const [term, setTerm] = useState<string>("");
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${term}`);
    setTerm("");
  };

  const handleRandom = async () => {
    const { idMeal } = await getRandom();

    navigate(`/detail/${idMeal}`);
  };
  return (
    <div className="container bg-[#c9945b] w-full lg:h-36 rounded-t-3xl flex justify-center items-center relative lg:flex-row flex-col">
      <div className="hidden lg:block text-4xl pl-4 font-patrick cursor-pointer text-[#fcf4d3]">
        <Link to="/">How2Cooking</Link>
      </div>
      <div>
        <Link to="/">
          <img src={cheflogo} className="w-28 lg:w-72" />
        </Link>
      </div>

      <div className="text-sm lg:text-lg pr-4 font-patrick justify-center items-center text-[#fcf4d3] flex">
        <div className="mx-4 cursor-pointer">
          <Link to="/favorite">FAVORITE</Link>
        </div>
        <div className="mx-4 cursor-pointer" onClick={handleRandom}>
          RANDOM MEAL
        </div>
      </div>
      <div className="px-2">
        <form
          onSubmit={handleSubmitSearch}
          className="flex items-center justify-center"
        >
          <div className="w-full mx-4 my-2 lg:w-auto lg:my-0">
            <input
              type="text"
              className="bg-transparent border-4 border-[#fcf4d3] outline-none lg:w-full w-full p-2 border-solid rounded-lg text-sm lg:text-lg"
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
  );
}
