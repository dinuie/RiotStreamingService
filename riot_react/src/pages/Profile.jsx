import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getFavoriteMovie, getUserId } from "../util/ApiUtils";
import { Carousel } from "antd";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useCurrentUser from "../components/useCurrentUser";

const ProfilePage = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState({});
  const isLoggedIn = useCurrentUser();

  useEffect(() => {
    getUserId(localStorage.getItem("userId")).then((data) => setUser(data));
  }, []);

  useEffect(() => {
    getFavoriteMovie(localStorage.getItem("userId")).then((data) =>
      setMovies(data)
    );
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Navbar showSearchBox={false} />
      {isLoggedIn && (
        <div className="bg-gradient-to-br from-purple-900 to-pink-500 min-h-screen bg-center bg-fixed h-screen flex-col justify-center items-center text-center text-white bg-cover bg-no-repeat">
          <div className="">
            {Array(4)
              .fill()
              .map((_, index) => (
                <br key={index} />
              ))}
            <h1 className="text-4xl font-semibold font-sans mb-5">
              Hello, {user.username}
            </h1>
            <p className="mb-4">
              Username:
              <input
                type="text"
                value={user.username}
                className="bg-transparent text-white mx-2 "
                style={{ textAlign: "center" }}
              />
            </p>
            <p className="mb-4">
              Date of Birth:
              <input
                type="text"
                value={user.userDateOfBirth}
                className="bg-transparent text-white  "
                style={{ textAlign: "center" }}
              />
            </p>
            <p className="mb-4">
              Email:
              <input
                type="text"
                value={user.userEmail}
                className="bg-transparent text-white  "
                style={{ textAlign: "center" }}
              />
            </p>
          </div>
          <div className="mt-20">
            <h2 className="text-3xl font-sans font-semibold mb-5">
              Your Watchlist
            </h2>
            <Carousel
              dots={false}
              infinite={movies.length > 2}
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
                      time={e.runtime + "min"}
                      year={new Date(e.release_date).getFullYear()}
                    />
                  );
                })
              ) : (
                <h4 className="text-white text-center p-20 font-bold flex-col items-center">
                  Your Watchlist is empty
                </h4>
              )}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
