import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import { Heart, ShoppingBag } from "lucide-react";

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
        <Link to="/" className="flex items-center space-x-2">
          <img className="w-25" src="data:image/png;base64,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" alt="" />
        </Link>

        <div className="flex-1 mx-6">
       <SearchBar/>
        </div>

        <div className="flex items-center space-x-4">
        <Heart/>
        <ShoppingBag/>
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

      <nav className="border-t border-gray-200">
        <div className="container mx-auto flex space-x-6 py-3 px-4 font-semibold text-xl">
          {navLinks.map(({ name, path, isSale }) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-[#e20020]${
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
