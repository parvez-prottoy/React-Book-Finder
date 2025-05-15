export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 md:py-8">
      <div className="container mx-auto">
        <p className="text-center text-sm lg:text-base">
          Copyright ©{currentYear}
        </p>
      </div>
    </footer>
  );
}
