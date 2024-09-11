import { useState, useEffect, useRef } from "react";
import { BlogIcon } from "../../../public/svg/BlogIcon";
import Link from "next/link";
import { HeaderLogo } from "../../../public/svg/HeaderLogo";
import { usePathname } from "next/navigation";

export const Header = ({ datas = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef(null);
  const path = usePathname();
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = datas.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setShowResults(results.length > 0);
  }, [searchQuery, datas]); 

  useEffect(() => {
    setShowResults(false);
  }, [path]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex justify-center glass">
      <header className="relative w-[1216px] py-8 justify-between flex">
        <Link href="/">
          <BlogIcon />
        </Link>
        <div className="flex gap-10 justify-center items-center">
          <Link href="/">
            <button className="text-[black] nav-item font-medium">Home</button>
          </Link>
          <Link href="/blog-list">
            <button className="text-[black] nav-item font-medium">Blog</button>
          </Link>
          <Link href="/contact-us">
            <button className="text-[black] nav-item font-medium">
              Contact
            </button>
          </Link>
        </div>
        <div
          ref={resultsRef}
          className="py-2 px-4 justify-center gap-3 items-center rounded-md bg-[#F4F4F5] flex relative" // Added relative class
        >
          <input
            type="text"
            className="bg-[#F4F4F5] outline-none"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>
            <HeaderLogo />
          </button>
          {showResults && (
            <div className="absolute top-24 max-h-[500px] overflow-scroll max-w-md mt-2 bg-white border rounded-md shadow-lg z-10">
              <ul>
                {searchResults.length === 0 ? (
                  <li className="py-2 px-4">No results found</li>
                ) : (
                  searchResults.map((result) => (
                    <li key={result.id} className="py-2 px-4 hover:bg-gray-200">
                      <Link href={`/blog-list/${result.id}`} key={result.id}>
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
    </div>
  );
};
