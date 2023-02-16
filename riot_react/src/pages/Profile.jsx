import {color} from '@mui/system';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {getFavoriteMovie, getMovieByGenre, getMovieGenre, getUserId} from "../util/ApiUtils";
import {Card, Carousel, Col, Row} from "antd";
import MovieCard from "../components/MovieCard";

const ProfilePage = () => {
    const [movies, setMovies] = useState([]);

    const [user, setUser] = useState({})


    useEffect(() => {
        console.log(localStorage.getItem("userId"))
        getUserId(localStorage.getItem("userId")).then(data => setUser(data))
        console.log("genurile de film");
    }, []);

    useEffect(() => {
        getFavoriteMovie(localStorage.getItem("userId")).then(data => setMovies(data))
    }, []);



    return (
        <div style={{
            background: `url(https://i.imgur.com/zn8ODjk.jpg) no-repeat center center fixed`,
            backgroundSize: "cover",
            backgroundColor: "#111827",
            color: "white",
            textAlign: "center",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "25px"
        }}>
            <div>
                <h1 style={{fontSize: "36px", marginBottom: "4rem"}}>Hello {user.username}</h1>
                <p style={{marginBottom: "2rem"}}>
                    Username :
                    <input type="text" value={user.username} style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        borderBottom: "1px solid white",
                        textAlign: "center"
                    }}/>
                </p>
                <p style={{marginBottom: "2rem"}}>
                    Date of Birth :
                    <input type="text" value={user.userDateOfBirth} style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        borderBottom: "1px solid white",
                        textAlign: "center"
                    }}/>
                </p>
                <p style={{marginBottom: "2rem"}}>
                    Email :
                    <input type="text" value={user.userEmail} style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        borderBottom: "1px solid white",
                        textAlign: "center"
                    }}/>
                </p>
                <Link to="/home">
                    <button
                        style={{position: "absolute", left: "0", top: "0"}}
                        className='text-black font-sans bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center m-5'>
                        Back to Homepage
                    </button>
                </Link>


                <div className="m-10">
                    <h2 className="text-2xl text-white font-sans font-semibold mb-5 m-3">
                       Liked Movies:
                    </h2>
                    <Carousel
                        dots={false}
                        infinite={movies.length>2}
                        autoplay
                        speed={300}
                        slidesToShow={3}
                        slidesToScroll={1}
                    >
                        {movies.length > 0 ? (
                            movies.map((e, i) => {
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
                                No favorite movies found !
                            </h4>
                        )}
                    </Carousel>
                </div>
            </div>

        </div>
    )
        ;
};

export default ProfilePage;