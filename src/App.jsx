import { useState } from "react";
import Banner from "./components/Banner/Banner";
import BookGrid from "./components/Books/BookGrid";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  const handleSort = (sortBy) => {
    setSortBy(sortBy);
    console.log(sortBy);
  };
  return (
    <MainLayout>
      <Banner
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        sortBy={sortBy}
        handleSort={handleSort}
      />
      <BookGrid searchTerm={searchTerm} sortBy={sortBy} />
    </MainLayout>
  );
}
