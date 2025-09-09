import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import { Heart, ShoppingBag } from "lucide-react";

const navLinks = [
  { name: "Erkaklar", path: "/men" },
  { name: "Ayollar", path: "/women" },
  { name: "Bolalar", path: "/kids" },
  { name: "Sport uchun", path: "/sports" },
  { name: "Brandlar", path: "/brands" },
  { name: "Savdo", path: "/sale", isSale: true },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            className="w-9"
            src="https://i.pinimg.com/1200x/ab/01/89/ab01895078f02efdf95f7b486f94d7cd.jpg"
            alt="Logo"
          />
          <h1 className="font-semibold text-lg">Zarxal</h1>
        </Link>

        {/* Search bar - always visible */}
        <div className="flex-1 mx-6">
          <SearchBar />
        </div>

        {/* Icons and buttons - only on md+ */}
        <div className="hidden md:flex items-center space-x-4">
          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
          <button className="bg-[#800020] text-white px-3 py-1 rounded font-semibold hover:bg-gray-800 transition whitespace-nowrap">
            Hoziroq sotib oling
          </button>
          <Link
            to="/signup"
            className="border border-black px-3 py-1 rounded font-semibold hover:bg-black hover:text-white transition whitespace-nowrap"
          >
            Ro'yxatdan o'tish
          </Link>
          <Link to="/login" className="font-semibold hover:underline whitespace-nowrap">
            Kirish
          </Link>
        </div>
      </div>

      {/* Navigation links - only on md+ */}
      <nav className="border-t border-gray-200">
        <div className="container mx-auto hidden md:flex space-x-6 py-3 px-4 font-semibold text-md">
          {navLinks.map(({ name, path, isSale }) => (
            <Link
              key={path}
              to={path}
              className={`whitespace-nowrap hover:text-[#e20020] ${
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
