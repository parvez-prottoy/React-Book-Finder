import Notification from "../shared/SVG/Notification";

export default function Header() {
  return (
    <nav className="py-6 shadow fixed top-0 w-full">
      <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
        <a href="/">
          <h2 className="text-2xl font-extrabold">Book Finder</h2>
        </a>
        <Notification />
      </div>
    </nav>
  );
}
