import { newNews } from "../data";

const New = () => {
  return (
    <section className="h-full bg-VeryDarkBlue px-6 py-9 text-OffWhite">
      <h2 className="mb-8 text-3xl font-bold text-SoftOrange md:text-[2.75rem]">
        New
      </h2>
      {newNews.map(({ id, title, description }) => {
        return (
          <div key={id}>
            <h3 className="my-3 text-xl font-extrabold">{title}</h3>
            <p className="pr-4 text-GrayishBlue">{description}</p>
            {id !== 3 && <hr className="my-7" />}
          </div>
        );
      })}
    </section>
  );
};

export default New;
