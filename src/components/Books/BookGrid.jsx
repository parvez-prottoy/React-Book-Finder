import { useState } from "react";
import booksData from "../../db/booksData";
import BookGridItem from "./BookGridItem";

export default function BookGrid({ searchTerm }) {
  const [books] = useState(booksData);
  const filterBySearch = (book) => {
    if (searchTerm !== "") {
      return book?.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  };
  const filteredBooks = books.filter(filterBySearch);
  if (filteredBooks.length === 0) {
    return (
      <section className="container mx-auto  gap-8 max-w-7xl">
        <h2 className="text-2xl font-bold text-red-600 text-center">
          No Book Found!
        </h2>
      </section>
    );
  }
  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.filter(filterBySearch).map((book) => (
        <BookGridItem key={book.id} book={book} />
      ))}
    </section>
  );
}
