import MovieCard from "../components/MovieCard";
import React, { useCallback, useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
// import { CircularProgress } from "@mui/material";

function Home() {
  const [isAtTop, changeGoToTop] = useState(false);
  const [searchedArray, setSearchedArray] = useState([false]);
  const [startIndex, changeStartIndex] = useState(0);
  const [isSearched, changeIsSearched] = useState("");
  const debounceTimeoutId = useRef(null);
  // const [loading, setLoading] = useState(true);

  const movieList = async (searchText) => {
    try {
      let response;
      // setLoading(true);
      const endpoint = searchText
        ? `api?title=${searchText}`
        : `api?startIndex=${startIndex}`;
      response = await fetch(endpoint);
      // setLoading(false);
      if (!response.ok) {
        throw new Error(
          `Error: Failed to load resource: the server responded with a status of ${response.status}`
        );
      }
      const data = await response.json();
      setSearchedArray(
        searchText
          ? data
          : searchedArray.concat(data.slice(startIndex, startIndex + 20))
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    movieList();
  }, [startIndex]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      changeStartIndex(startIndex + 20);
    }
  }, [startIndex, changeStartIndex]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleSearch = useCallback(
    async (text) => {
      if (debounceTimeoutId.current) {
        clearTimeout(debounceTimeoutId.current);
      }
      debounceTimeoutId.current = setTimeout(async () => {
        if (text !== "") {
          changeIsSearched(text);
          try {
            const response = await fetch(`api?title=${text}`);
            if (!response.ok) {
              throw new Error(
                `Error: Failed to load resource: the server responded with a status of ${response.status}`
              );
            }
            const data = await response.json();
            let filteredArray = data.filter(function (obj) {
              return obj.english_title
                .toLowerCase()
                .includes(text.toLowerCase());
            });
            setSearchedArray(filteredArray);
          } catch (err) {
            console.error(`Error: ${err}`);
          }
        } else {
          setSearchedArray([]);
          changeIsSearched("");
        }
      }, 200);
    },
    [changeIsSearched, setSearchedArray]
  );

  useEffect(() => {
    const handleScroll = () => {
      changeGoToTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-gray-900">
      <div>
        <Navbar handleSearch={handleSearch} />
        <br></br>
        <br></br>
        <br></br>
      </div>
      (
      <div
        className={`md:grid md:grid-cols-3 md:gap-3 ${
          searchedArray.length ? "" : "hidden"
        }`}
      >
        {searchedArray.length > 0 ? (
          searchedArray.map((e, i) => {
            return (
              <MovieCard
                key={i}
                id={e.id}
                enName={e.english_title}
                img={e.backdrop_path}
                imbd={e.imdb}
                object={e}
                time={Math.floor(e.runtime / 60) + "h" + (e.runtime % 60)}
                year={new Date(e.release_date).getFullYear()}
              />
            );
          })
        ) : (
          <h4 className="text-white text-center p-20 font-bold flex-col items-center">
            No results found
          </h4>
        )}
      </div>
      )
      <div id="searched" className="px-6 py-4">
        {isSearched !== "" ? (
          <h4 className="text-white text-center m-0 font-medium p-5 flex-col items-center">
            You've searched: {isSearched}
          </h4>
        ) : (
          ""
        )}

        <button
          className={`bg-slate-50 rounded-full p-2 pl-2 pr-2 text-black font-bold text-center ${
            isAtTop ? "" : "hidden"
          }`}
          style={{ position: "fixed", right: "10px", top: "10px" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default Home;
