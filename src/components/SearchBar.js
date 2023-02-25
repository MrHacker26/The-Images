import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import BackImg from "../assets/uk.jpeg";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleType = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div
      className="w-full md:w-full md:h-96 h-56 justify-items-center items-center grid mt-9 rounded-lg"
      style={{
        backgroundImage: `url(${BackImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black/50 w-full h-full grid place-content-center rounded-lg">
        <header className="flex justify-between my-6 ">
          <form onSubmit={handleSearch}>
            <label
              htmlFor="search"
              className="w-5 h-5 text-gray-500 dark:text-gray-40 absolute pt-4 px-3"
            >
              <BsSearch />
            </label>
            <input
              type="text"
              placeholder="Search Images Here"
              value={query}
              name="search"
              autoComplete="off"
              onChange={handleType}
              className="h-12 px-9 md:w-[900px] py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:text-black"
            />
            <button
              type="submit"
              className=" hidden bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
              Search
            </button>
          </form>
        </header>
      </div>
    </div>
  );
}

export default SearchBar;
