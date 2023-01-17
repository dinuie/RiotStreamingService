import MovieCard from "../components/MovieCard"
import MOVIES_DATA from "../util/movies_data.js";
import {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Home() {
    const maxLoadMovies = 200;
    const [isAtTop, changeGoToTop] = useState(false);

    const [searchedArray, changeSearched] = useState([false]);


    const movieList = async () => {
        await fetch('api', {})
            .then( response =>  response.json())
            .then(data => {
                changeSearched(data)
            })
            .then(function (response) {
                console.log(`Fetch complete. (Not aborted)`);
            }).catch(function (err) {
                console.error(` Err: ${err}`);
            });
    }
    useEffect(() => {
        movieList()
    }, [])


    const [isSearched, changeIsSearched] = useState("");
    const handleSearch = useCallback((text) => {
        if (text != "") {
            changeIsSearched(text);
            console.log(searchedArray)
            let filteredArray = searchedArray.filter(function (obj) {
                return (
                    obj.english_title.toUpperCase().includes(text.toUpperCase())
                );
            }).map(function (obj) {
                return obj;
            });
            if (text.length <= 3) {
                changeSearched(filteredArray.slice(0, 5));
            } else {
                if (filteredArray.length > 30) {
                    changeSearched(filteredArray.slice(0, 30));
                } else {
                    changeSearched(filteredArray);
                }
            }
        } else {
            changeSearched(
                searchedArray)
            changeIsSearched("");
        }
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                changeGoToTop(true);
            } else {
                changeGoToTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return (
        <div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <div className="">
                    <div className="flex space-x-1">
                        <input
                            type="text"
                            className="font-bold block w-full px-10 py-2 text-black-600 bg-white border rounded-full focus:border-purple-600 focus:ring-purple-600 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder="Search..."
                        />
                        <button
                            className="px-4 text-white bg-purple-600 rounded-full ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div id="searched">
                {isSearched !== "" ? (
                    <h4 className="text-white text-center">
                        You've searched: {isSearched}
                    </h4>
                ) : (
                    ""
                )}
                <>
                    <div
                        className={
                            searchedArray.length ? "md:grid md:grid-cols-3 md:gap-3" : ""
                        }
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
                            <>
                                <h4 className="text-white text-center">
                                    No results found
                                </h4>
                            </>
                        )}

                        {isAtTop ? (
                            <button
                                className="bg-slate-50 rounded-full p-2 pl-2 pr-2 text-black font-bold"
                                style={{position: "fixed", right: "10px", top: "10px"}}
                                onClick={() =>
                                    window.scrollTo({top: 0, behavior: "smooth"})
                                }
                            >
                                Back to Top
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                </>
            </div>
        </div>
    );
}

export default Home;
