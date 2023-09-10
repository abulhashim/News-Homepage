import Navbar from "./Components/Navbar";
import Popular from "./Components/Popular";
import New from "./Components/New";
import Trending from "./Components/Trending";

const App = () => {
  return (
    <div className="px-4 py-8 text-[0.9375rem] lg:my-12 lg:h-[50.375rem] lg:max-w-[69.375rem] lg:p-0 min-[1330px]:my-[5.6rem]">
      <main>
        <Navbar />
        <div className="my-10 gap-8 lg:mb-[4.5rem] lg:mt-[3.25rem] lg:flex lg:items-stretch">
          <div className="lg:basis-2/3">
            <Popular />
          </div>
          <div className="my-16 lg:my-0 lg:basis-1/3">
            <New />
          </div>
        </div>
        <Trending />
      </main>
    </div>
  );
};

export default App;
