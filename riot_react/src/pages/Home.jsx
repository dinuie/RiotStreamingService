import MovieCard from "../components/MovieCard"
import React, { useCallback, useEffect, useState } from 'react';
import Navbar from "../components/Navbar";

function Home() {
    const [isAtTop, changeGoToTop] = useState(false);
    const [searchedArray, changeSearched] = useState([false]);
    const [startIndex, changeStartIndex] = useState(0);

    const movieList = async (searchText) => {
        if(searchText){
            await fetch(`api?title=${searchText}`)
                .then(response => response.json())
                .then(data => {
                    changeSearched(data);
                })
                .catch(function (err) {
                    console.error(` Err: ${err}`);
                });
        }else{
            await fetch(`api?startIndex=${startIndex}`)
                .then(response => response.json())
                .then(data => {
                    changeSearched(searchedArray.concat(data.slice(startIndex, startIndex + 30)));
                })
                .catch(function (err) {
                    console.error(` Err: ${err}`);
                });
        }
    }
    
    useEffect(()=>{
        movieList()
    },[startIndex])

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                changeStartIndex(startIndex + 20);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [startIndex]);
    


    const [isSearched, changeIsSearched] = useState("");
    const handleSearch = useCallback((text) => {
        if (text !== "") {
            changeIsSearched(text);
            fetch('api', {})
                .then(response => response.json())
                .then(data => {
                    let filteredArray = data.filter(function (obj) {
                        return (
                            obj.english_title.toUpperCase().includes(text.toUpperCase())
                        );
                    });
                    if (filteredArray.length > 30) {
                        changeSearched(filteredArray.slice(0, 30));
                    } else {
                        changeSearched(filteredArray);
                    }
                })
        } else {
            changeSearched(searchedArray);
            changeIsSearched("");
        }
    }, [searchedArray, changeSearched, changeIsSearched]);
    
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
            <Navbar handleSearch={handleSearch} />
                <br></br>
                <br></br>
                <br></br>
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
