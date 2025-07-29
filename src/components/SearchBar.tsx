import { SearchIcon } from "../icons/Icons";

const SearchBar = () => (
  <div
    className="flex items-center gap-2 w-100
                  px-3 py-2
                  bg-white border border-gray-300 rounded
                  focus-within:border-violet-700 transition-colors"
  >
    {/* Icon */}
    <SearchIcon className="text-gray-500 shrink-0" size={18} />

    {/* Input (no state, purely presentational) */}
    <input
      type="text"
      placeholder="Search for products, brands and more"
      className="w-full text-sm outline-none placeholder-gray-400"
        /* remove this if you later add search logic */
    />
  </div>
);

export default SearchBar;
