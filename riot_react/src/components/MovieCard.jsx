import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  addFavoriteMovie,
  getFavoriteMovie,
  removeFavoriteMovie,
} from "../util/ApiUtils";
import { Button } from "antd";
import ifCurrentUser from "./useCurrentUser";
import { BsSuitHeart, BsFillSuitHeartFill } from "react-icons/bs";

function MovieCard({ id, enName, year, imbd, time, img }) {
  if (!img || !enName || !imbd) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isFavorite, setIsFavorite] = useState(false);

  const isLoggedIn = ifCurrentUser();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isLoggedIn) {
      getFavoriteMovie(localStorage.getItem("userId"))
        .then((data) => {
          const favoriteMovieIds = data.map((movie) => movie.id);
          setIsFavorite(favoriteMovieIds.includes(id));
        })
        .catch((error) => {
          console.log("Error occurred while fetching favorite movies: ", error);
        });
    }
  }, [id, isLoggedIn]);

  function handleFavorite() {
    if (isLoggedIn) {
      setIsFavorite(!isFavorite);
      if (isFavorite) {
        removeFavoriteMovie(localStorage.getItem("userId"), id)
          .then(() => setIsFavorite(false))
          .catch((error) => {
            console.log(
              "Error occurred while removing favorite movie: ",
              error
            );
          });
      } else {
        addFavoriteMovie(localStorage.getItem("userId"), id)
          .then(() => setIsFavorite(true))
          .catch((error) => {
            console.log("Error occurred while adding favorite movie: ", error);
          });
      }
    }
  }

  const handleClick = () => {
    localStorage.setItem("from", `/watch/${id}`);
  };

  const movieLink = isLoggedIn ? `/watch/${id}` : `/auth/login`;

  return (
    <div className="relative rounded-2xl bg-opacity-70 bg-clip-padding backdrop-blur drop-shadow-1g">
      <Link to={movieLink} onClick={handleClick}>
        {img ? (
          <img
            name="image"
            className="w-full h-fit rounded-xl bg-cover object-contain"
            alt={enName}
            src={"https://image.tmdb.org/t/p/w500" + img}
          />
        ) : (
          <div className="w-full h-60 rounded-xl bg-cover">
            No Image Available
          </div>
        )}
        <div className="absolute top-0 right-0 bg-slate-900 rounded-full p-1 shadow-lg bg-opacity-50">
          <h4 className="text-white text-sm ml-2 mr-2 font-sans font-normal">
            {time}
          </h4>
        </div>
      </Link>
      <div className="flex justify-between items-center p-2">
        <p className="pl-1 pt-1 mt-0.5 text-white font-sans text-l">
          {enName} ({year})
        </p>
        {isLoggedIn && (
          <div className="flex items-center">
            <div className="mr-2">
              <Button
                variant="outline-danger"
                onClick={handleFavorite}
                className="border-0 text-white text-2xl p-0 m-0"
              >
                {isFavorite ? <BsFillSuitHeartFill /> : <BsSuitHeart />}
              </Button>
            </div>
            {!isFavorite && (
              <div className="text-white text-sm font-sans font-semibold">
                Add to watchlist
              </div>
            )}
          </div>
        )}
      </div>
      <div className="absolute left-4 top-4">
        <div className="bg-opacity-30">
          <h4
            className="text-white text-sm ml-2 mr-2 font-sans font-normal"
            style={{ textShadow: "1px 1px #000000" }}
          >
            <FontAwesomeIcon
              className="text-yellow-400 mr-1.5 shadow-lg font-bold"
              icon={faStar}
            />
            IMDb {imbd}
          </h4>
        </div>
      </div>
    </div>
  );
}
export default MovieCard;
