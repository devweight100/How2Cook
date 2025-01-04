import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import cheflogo from "../img/cheflogo.png";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [term, setTerm] = useState<string>("");
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${term}`);
    setTerm("")
  };
  return (
    <div className="container bg-[#c9945b] w-full h-36 rounded-t-3xl flex justify-center items-center relative">
      <div className="text-6xl cursor-pointer pl-10 font-patrick text-[#fcf4d3]">
        <Link to="/">How2Cooking</Link>
      </div>
      <div>
        <img src={cheflogo} className="w-72 " />
      </div>

      <div className="text-lg pr-4 font-patrick justify-center items-center text-[#fcf4d3] flex">
        <div className="mx-4 cursor-pointer">
          <Link to="/favorite">FAVORITE</Link>
        </div>
        <div className="mx-4 cursor-pointer">RANDOM MEAL</div>

        <form onSubmit={handleSubmitSearch} className="flex items-center">
          <div className="mx-4">
            <input
              type="text"
              className="bg-transparent border-4 border-[fcf4d3] outline-none w-full p-2 border-solid rounded-lg"
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </div>
          <div>
            <Button className="bg-[#9d784a] border-[#b39561] cursor-pointer hover:bg-yellow-700 border-solid border-2">
              SEARCH
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
