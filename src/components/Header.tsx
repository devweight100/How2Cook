import { Link,  useNavigate } from "react-router-dom";


import { useContext } from "react";
import { getRandom } from "../api/getRandom";
import MealContext, { MealContextType } from "./context/Meals";


export default function Header() {
  const navigate = useNavigate();
  const { likeIds } = useContext<MealContextType>(MealContext)
  



  const handleRandom = async () => {
    const { idMeal } = await getRandom();

    navigate(`/detail/${idMeal}`);
  };
  return (
    <div className="container bg-[#c9945b] lg:w-[1536px] w-full lg:h-36 lg:rounded-t-3xl flex justify-center items-center relative lg:flex-row flex-col ">
      <div className="hidden lg:block text-6xl w-[33%] pl-4 font-patrick cursor-pointer text-[#fcf4d3]">
        <Link to="/">How2Cooking</Link>
      </div>
      <div>
        <Link to="/">
          <img src="/img/cheflogo.png" className="w-[30%] lg:w-72" />
        </Link>
      </div>

      <div className="text-sm lg:text-lg pr-4 w-[30%] font-patrick justify-end items-center text-[#fcf4d3] flex">
        <div className="mx-4 cursor-pointer relative">
          <Link to="/favorite">FAVORITE</Link>
          {likeIds.length > 0 && (
            <div className="absolute left-[65px] top-[10px] lg:top-[24px] lg:left-[92px] lg:bg-[#78350f] p-1 w-6 h-6 rounded-full text-center text-xs font-bold text-white">
              {likeIds.length}
            </div>
          )}
        </div>
        <div className="mx-4 cursor-pointer" onClick={handleRandom}>
          RANDOM MEAL
        </div>
      </div>
      {/* <div className="px-2">
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
      </div> */}
    </div>
  );
}
