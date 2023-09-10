import { trendingNewsData } from "../data";

const Trending = () => {
  return (
    <section className="my-12 flex flex-col gap-10 lg:my-0 lg:flex-row lg:justify-between lg:gap-0">
      {trendingNewsData.map(({ id, trendingNo, title, description, img }) => {
        return (
          <div key={id} className="flex gap-6 lg:basis-[31%]">
            <div className="max-w-[6.25rem]">
              <img src={img} alt={`${title} illustration`} />
            </div>
            <div>
              <h3 className="text-[2rem] font-bold leading-none text-GrayishBlue">
                {trendingNo}
              </h3>
              <h4 className="my-2 text-[1.15rem] font-extrabold text-VeryDarkBlue">
                {title}
              </h4>
              <p className="leading-relaxed text-DarkGrayishBlue">
                {description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Trending;
