import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";

// O‘zbekona libos nomlari
const placeholders = [
  'pushti atlas ko‘ylak',
  'milliy charm kurtka',
  'oq sport tufli',
  'yozgi ayollar libosi',
  'kulrang sport shim',
  'qizil shim (kortiseg)',
  'qora keng shim (diskies)',
];

const SearchBar = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPlaceholder = placeholders[placeholderIndex];

    if (typing) {
      if (charIndex < currentPlaceholder.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentPlaceholder.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentPlaceholder.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setTyping(true);
        setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
      }
    }
  }, [charIndex, typing, placeholderIndex]);

  return (
    <div className="relative w-full max-w-md sm:max-w-lg mx-auto">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder={`"${displayedText || "pushti atlas ko‘ylak"}"ni qidiring`}
        className="w-full rounded-full border border-gray-300 pl-10 pr-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#e20020]"
      />
    </div>
  );
};

export default SearchBar;
