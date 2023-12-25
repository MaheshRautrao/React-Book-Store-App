import Button from "../Button";
import TopBooksSectionBookCard from "./TopBooksSectionBookCard";

const TopBooksSection = () => {
  const topBooks = [
    {
      book_image_src: "book-1.jpg",
      title: "Who's There",
      author: "John",
      rating: 5,
    },
    {
      book_image_src: "book-2.jpg",
      title: "His Life",
      author: "John",
      rating: 4.5,
    },
    {
      book_image_src: "book-3.jpg",
      title: "Lost Boys",
      author: "John",
      rating: 4.7,
    },
    {
      book_image_src: "book-1.jpg",
      title: "His Life",
      author: "John",
      rating: 4.4,
    },
    {
      book_image_src: "book-2.jpg",
      title: "Who's There",
      author: "John",
      rating: 4.6,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex  flex-col justify-center ">
        <h1 className="font-bold text-3xl text-center">Top Books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure,
          corporis
        </p>
      </div>
      <div className="flex gap-5">
        {topBooks.map((book, ind) => {
          return (
            <TopBooksSectionBookCard
              key={ind}
              book_image_src={book.book_image_src}
              title={book.title}
              author={book.author}
              rating={book.rating}
            />
          );
        })}
      </div>
      <div>
        <Button btn_text="View All Books" />
      </div>
    </div>
  );
};

export default TopBooksSection;
