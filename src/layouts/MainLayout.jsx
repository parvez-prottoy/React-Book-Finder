import Header from "../components/Header/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="my-10 lg:my-14">{children}</main>
    </>
  );
}
