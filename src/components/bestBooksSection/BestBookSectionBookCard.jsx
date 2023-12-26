import Button from "../Button";
import RatingStar from "../RatingStar";

const bestBookSectionBookCard = ({ img_src, book_title, book_description }) => {
  return (
    <div
      data-aos="zoom-in"
      className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] aos-init aos-animate"
    >
      <div className="h-[100px]">
        <img
          src={img_src}
          alt=""
          className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
        />
      </div>
      <div className="p-4 text-center ">
        <div className="flex items-center justify-center w-full">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </div>
        <h1 className="text-xl font-bold">{book_title}</h1>
        <p className="text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
          {book_description}
        </p>
        <Button btn_text="Order Now" />
      </div>
    </div>
  );
};

export default bestBookSectionBookCard;
