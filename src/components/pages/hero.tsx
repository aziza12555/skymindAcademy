import { Link } from "react-router-dom";
import Carousel from "./carousel";

const Hero = () => {
  return (
 <>
    <div className="w-full">
      {/* Top section with images */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] md:h-[600px]">
        {/* Women Section */}
        <div className="relative group overflow-hidden">
          <img
            src="https://contentful.depop.com/itoh30v6uh9a/25qBMrtTmRUr1Dfil9u5lH/3583b41198554d4494cf5aff8b104e99/Women.webp"
            alt="Women"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
            <h2 className="text-4xl font-bold mb-4">Women</h2>
            <Link
              to="/women"
              className="bg-white text-black px-5 py-2 rounded font-semibold text-sm hover:bg-gray-100"
            >
              Shop now
            </Link>
          </div>
        </div>

        {/* Men Section */}
        <div className="relative group overflow-hidden">
          <img
            src="https://contentful.depop.com/itoh30v6uh9a/5Cszb1OnWwy3dpjxqenWGS/eef07aee726760286956db35a720d5a3/Men.webp"
            alt="Men"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
            <h2 className="text-4xl font-bold mb-4">Men</h2>
            <Link
              to="/men"
              className="bg-white text-black px-5 py-2 rounded font-semibold text-sm hover:bg-gray-100"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA text */}
      <div className="text-center py-10 px-4 justify-center space-y-5 bg-white">
        <img className="text-center justify-center mx-auto" src="https://txt.1001fonts.net/img/txt/dHRmLjM2LjAwMDAwMC5JQ0JDZFhrZ1ptOXlJR3hsYzNNdUlGTmxiR3dnWm05eUlHWnlaV1V1SUV0bFpYQWdabUZ6YUdsdmJpQmphWEpqZFd4aGNpNC4w/kaella.regular.png" />
        <Link
          to="/sell"
          className="bg-black text-white px-6 py-2  font-semibold text-sm hover:bg-gray-800"
        >
          Sell now
        </Link>
      </div>
    </div>
    <Carousel/>
 </>
  );
};

export default Hero;
