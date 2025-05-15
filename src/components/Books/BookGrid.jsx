import { useState } from "react";
import booksData from "../../db/booksData";
import BookGridItem from "./BookGridItem";

export default function BookGrid({ searchTerm, sortBy }) {
  const [books] = useState(booksData);
  // Filter by search
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
  // Filter by sort
  const sortByNameYear = (a, b) => {
    switch (sortBy) {
      case "name_asc":
        return a.name.localeCompare(b.name);
      case "name_desc":
        return b.name.localeCompare(a.name);
      case "year_asc":
        return a.publishedYear - b.publishedYear;
      case "year_desc":
        return b.publishedYear - a.publishedYear;
      default:
        return 0;
    }
  };
  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books
        .filter(filterBySearch)
        .sort(sortByNameYear)
        .map((book) => (
          <BookGridItem key={book.id} book={book} />
        ))}
    </section>
  );
}
