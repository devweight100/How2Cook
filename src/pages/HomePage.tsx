import ShowMeal from "../components/ShowMeal";

const HomePage = () => {
  return (
    <div>
      <div className="bg-[#f6e5bf] p-12 mx-auto flex flex-col justify-center container w-full rounded-b-3xl">
        <div className="w-full text-center font-patrick font-bold text-3xl mb-10 text-amber-900 underline underline-offset-4">
          <h1>Meal Categories</h1>
        </div>
        <ShowMeal />
      </div>
    </div>
  );
};

export default HomePage;
