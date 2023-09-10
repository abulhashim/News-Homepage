import { popularNews } from "../data";

const Popular = () => {
  const { title, description, imgForDesktop, imgForMobile } = popularNews[0];
  return (
    <article>
      <picture>
        <source media="(min-width: 768px)" srcSet={imgForDesktop} />
        <img src={imgForMobile} alt="illustration" />
      </picture>

      <div className="mt-9 md:flex">
        <h1 className="text-[2.75rem] font-extrabold leading-[1.1] md:basis-1/2 md:text-[3.5rem] ">
          {title}
        </h1>
        <div className="md:basis-1/2 md:pl-4 ">
          <p className="mb-14 mt-5 text-DarkGrayishBlue md:mt-0 ">
            {description}
          </p>
          <a
            href="#"
            className="bg-SoftRed px-8 py-4 uppercase tracking-[0.25em] text-OffWhite transition-colors duration-300 hover:bg-VeryDarkBlue"
          >
            read more
          </a>
        </div>
      </div>
    </article>
  );
};

export default Popular;
