import { useState, useEffect } from "react";
import { BlogIcon } from "../../../public/svg/BlogIcon";
import Link from "next/link";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const Header = ({ datas = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debouncedSearchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = datas.filter((item) =>
      item.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [debouncedSearchQuery, datas]);

  return (
    <header className="relative w-[1216px] py-8 justify-between flex">
      <Link href="/">
        <BlogIcon />
      </Link>
      <div className="flex gap-10 justify-center items-center">
        <Link href="/">
          <button className="text-[#3B3C4A] nav-item">Home</button>
        </Link>
        <Link href="/blog-list">
          <button className="text-[#3B3C4A] nav-item">Blog</button>
        </Link>
        <Link href="/contact-us">
          <button className="text-[#3B3C4A] nav-item">Contact</button>
        </Link>
      </div>
      <div className="py-2 px-4 justify-center gap-3 items-center rounded-md bg-[#F4F4F5] flex">
        <input
          type="text"
          className="bg-[#F4F4F5] outline-none"
          placeholder="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
              stroke="#52525B"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M10.5715 10.5716L14 14"
              stroke="#52525B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
        </button>
        {searchResults.length > 0 && (
          <div className="absolute top-24 max-h-[500px] overflow-scroll max-w-md mt-2 bg-white border rounded-md shadow-lg z-10">
            <ul>
              {searchResults.length === 0 ? (
                <li className="py-2 px-4">No results found</li>
              ) : (
                searchResults.map((result) => (
                  <li key={result.id} className="py-2 px-4  hover:bg-gray-200">
                    <Link href={`/${result.id}`}>
                      <div>{result.title}</div>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
