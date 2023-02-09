import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getMovieById } from "../util/ApiUtils";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Sv2 from "../components/TorServer";

const Watch = (props) => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const handleClick = () => {
    window.history.back();
  };

  useEffect(() => {
    getMovieById(id).then((response) => {
      setMovie(response);
    });
  }, [id]);

  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="text-white text-center p-20 font-sans">
        <div className="absolute">
          <button
            className="bg-black hover:bg-purple-600 hover:text-black text-purple-600 py-2 px-4 rounded"
            onClick={handleClick}
          >
            <IoMdArrowRoundBack />
          </button>
        </div>
        <h2 className="font-semibold mb-5 text-xl">{movie?.english_title}</h2>
        <img
          name="image"
          className={" w-full rounded-xl bg-cover "}
          style={{ height: "100%" }}
          alt={movie?.english_title}
          src={"https://image.tmdb.org/t/p/w500" + movie?.backdrop_path}
        />
        <div className="mt-6">
          <h2>
            IMDb: {movie?.imdb}
            <FontAwesomeIcon
              className="fa-2xs mb-1 ml-0.5 text-yellow-400 shadow-lg font-bold"
              icon={faStar}
            />
          </h2>
          <h2>Release: {movie?.release_date}</h2>
          <h2>
            Duration:{" "}
            {Math.floor(movie?.runtime / 60) + "h" + (movie.runtime % 60) + "m"}
          </h2>
        </div>
      </div>
      <div>
        <Sv2
          movieId={id}
          hash={movie?.hash}
          backdrop_path={movie?.backdrop_path}
        />
      </div>
    </div>
  );
};

export default Watch;
