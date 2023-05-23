import SearchSection from "../components/SearchSection";
import CocktailListSection from "../components/CocktailListSection";

const Home = () => {
  return (
    <div className="h-screen w-full bg-slate-100 p-24 flex flex-col items-center">
      <SearchSection />
      <CocktailListSection />
    </div>
  );
};

export default Home;
