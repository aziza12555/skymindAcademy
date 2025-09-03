import { Link } from "react-router-dom";
import SearchBar from "./searchbar";

const navLinks = [
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "Kids", path: "/kids" },
  { name: "Sports", path: "/sports" },
  { name: "Brands", path: "/brands" },
  { name: "Sale", path: "/sale", isSale: true },
];

const Navbar = () => {

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-[#e20020] font-extrabold text-2xl cursor-pointer select-none">
            depop
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-6">
       <SearchBar/>
        </div>

        {/* Icons and Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button
            aria-label="Favorites"
            className="hover:text-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 010 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
            aria-label="Cart"
            className="hover:text-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m5-7v7m4-7v7m1-10h2"
              />
            </svg>
          </button>
          <button className="bg-black text-white px-3 py-1 rounded font-semibold hover:bg-gray-800 transition">
            Sell now
          </button>
          <Link
            to="/signup"
            className="border border-black px-3 py-1 rounded font-semibold hover:bg-black hover:text-white transition"
          >
            Sign up
          </Link>
          <Link to="/login" className="font-semibold hover:underline">
            Log in
          </Link>
        </div>
      </div>

      {/* Navigation links */}
      <nav className="border-t border-gray-200">
        <div className="container mx-auto flex space-x-6 py-3 px-4 font-semibold text-sm">
          {navLinks.map(({ name, path, isSale }) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-[#e20020] ${
                isSale ? "text-[#e20020]" : "text-gray-700"
              } transition-colors`}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
