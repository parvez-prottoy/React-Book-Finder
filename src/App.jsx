import Banner from "./components/Banner/Banner";
import BookGrid from "./components/Books/BookGrid";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <Banner />
      <BookGrid />
    </MainLayout>
  );
}
