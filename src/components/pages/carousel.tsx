import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CarouselProps = {
  items: (string | number)[];
  initialActive?: number;
};

const levels = [-2, -1, 0, 1, 2];

const levelStyles = {
  "-2": "h-[150px] w-[110px] leading-[150px] bg-blue-900 left-[650px] mt-[25px]",
  "-1": "h-[180px] w-[130px] leading-[180px] bg-blue-500 left-[500px] mt-[10px]",
  "0": "h-[200px] w-[150px] leading-[200px] bg-blue-400 left-[330px] mt-0",
  "1": "h-[180px] w-[130px] leading-[180px] bg-blue-500 left-[180px] mt-[10px]",
  "2": "h-[150px] w-[110px] leading-[150px] bg-blue-900 left-[50px] mt-[25px]",
};

const Carousel: React.FC<CarouselProps> = ({ items, initialActive = 0 }) => {
  const [active, setActive] = useState(initialActive);

  // Calculate visible items based on active index and levels
  const visibleItems = levels.map((level) => {
    let index = active - level;
    if (index < 0) index = items.length + index;
    if (index >= items.length) index = index % items.length;
    return { id: items[index], level };
  });

  const moveLeft = () => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };

  const moveRight = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="relative w-[810px] h-[200px] mx-auto mt-20 select-none bg-[#89FAD0] font-lobster">
      {/* Left Arrow */}
      <button
        aria-label="Move left"
        onClick={moveLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-[#228291] flex items-center justify-center text-xl shadow cursor-pointer z-10 hover:bg-gray-200 transition"
      >
        ‹
      </button>

      {/* Items */}
      <div className="relative w-full h-full overflow-visible">
        <AnimatePresence initial={false}>
          {visibleItems.map(({ id, level }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: level === 0 ? 1 : 0.85 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.5 }}
              style={{ zIndex: level === 0 ? 10 : 5 }}
              className={`item absolute top-0 rounded-lg text-white text-center font-bold text-4xl leading-none select-none
                ${levelStyles[level as keyof typeof levelStyles]} 
                transition-all duration-700`}
            >
              {id}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <button
        aria-label="Move right"
        onClick={moveRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-[#228291] flex items-center justify-center text-xl shadow cursor-pointer z-10 hover:bg-gray-200 transition"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
