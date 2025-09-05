import { Link } from "react-router-dom";
import MyCarousel from "./carousel/carousel";

const Hero = () => {
  return (
  <>
    <div className="w-full">
      {/* Kategoriyalar */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] md:h-[600px]">

        {/* Ayollar bo‘limi */}
        <div className="relative group overflow-hidden w-full h-full">
          <img
            src="https://i.pinimg.com/1200x/2d/df/96/2ddf9664b50a8e9894adab806c82293d.jpg"
            className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
            <h2 className="text-4xl font-bold mb-4">Ayollar kiyimlari</h2>
            <Link
              to="/women"
              className="bg-[#800020] text-white px-5 py-2 rounded font-semibold text-sm hover:bg-gray-100"
            >
              Xarid qilish
            </Link>
          </div>
        </div>

        {/* Erkaklar bo‘limi */}
        <div className="relative group overflow-hidden w-full h-full">
          <img
            src="https://i.pinimg.com/736x/5f/46/99/5f469903a99bd84558cd5a5f4caddc96.jpg"
            alt="Erkaklar kiyimlari"
            className="w-full mb-55 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
            <h2 className="text-4xl font-bold mb-4">Erkaklar kiyimlari</h2>
            <Link
              to="/men"
              className="bg-[#800020] text-white px-5 py-2 rounded font-semibold text-sm hover:bg-gray-100"
            >
              Xarid qilish
            </Link>
          </div>
        </div>
      </div>


      <div className="text-center py-10 px-4 justify-center space-y-5 bg-white">
        
        <Link
          to="/sell"
          className="bg-black text-white px-6 py-2 font-semibold text-sm hover:bg-gray-800"
        >
          Hozir soting
        </Link>
      </div>
    </div>
    <MyCarousel/>
  </>
  );
};

export default Hero;
