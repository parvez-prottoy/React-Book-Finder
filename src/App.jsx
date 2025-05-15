import { useState } from "react";
import Banner from "./components/Banner/Banner";
import BookGrid from "./components/Books/BookGrid";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  return (
    <MainLayout>
      <Banner searchTerm={searchTerm} handleSearch={handleSearch} />
      <BookGrid searchTerm={searchTerm} />
    </MainLayout>
  );
}
