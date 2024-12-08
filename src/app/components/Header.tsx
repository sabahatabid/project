

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/">
          <a className="text-xl font-bold text-primary">Car Rent</a>
        </a>
        <nav className="hidden md:flex gap-4">
          <a href="/">
            <a className="text-gray-600 hover:text-primary">Home</a>
          </a>
          <a href="/about">
            <a className="text-gray-600 hover:text-primary">About</a>
          </a>
          <a href="/services">
            <a className="text-gray-600 hover:text-primary">Services</a>
          </a>
          <a href="/contact">
            <a className="text-gray-600 hover:text-primary">Contact</a>
          </a>
        </nav>
        <button className="md:hidden text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
