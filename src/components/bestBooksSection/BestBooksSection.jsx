import BestBooksSectionBookCard from "./BestBookSectionBookCard.jsx";

const BestBooksSection = () => {
  const bestBooks = [
    {
      img_src: "book-1.jpg",
      book_title: "His Life",
      book_description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img_src: "book-2.jpg",
      book_title: "Whos's There",
      book_description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img_src: "book-3.jpg",
      book_title: "Lost boy",
      book_description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Best Books</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            iure, corporis{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
          {bestBooks.map((book, ind) => (
            <BestBooksSectionBookCard
              key={ind}
              img_src={book.img_src}
              book_title={book.book_title}
              book_description={book.book_description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestBooksSection;
