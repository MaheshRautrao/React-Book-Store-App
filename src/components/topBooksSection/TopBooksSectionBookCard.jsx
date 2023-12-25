const TopBooksSectionBookCard = ({ book_image_src, title, author, rating }) => {
  return (
    <div>
      <div>
        <img
          src={book_image_src}
          alt=""
          className="w-40 h-56 object-cover rounded-md"
        />
      </div>
      <p className="font-semibold">{title}</p>
      <p className="font-normal text-sm">{author}</p>
      <div className="flex gap-2  items-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 576 512"
          className="text-yellow-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        </svg>
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default TopBooksSectionBookCard;
