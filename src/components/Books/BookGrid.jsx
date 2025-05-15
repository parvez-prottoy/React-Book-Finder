import booksData from "../../db/booksData";
import BookGridItem from "./BookGridItem";

export default function BookGrid() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {booksData.map((book) => (
        <BookGridItem key={book.id} book={book} />
      ))}
    </section>
  );
}
