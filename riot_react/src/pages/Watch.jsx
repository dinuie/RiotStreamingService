import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getMovieById } from "../util/ApiUtils";

const Watch = (props) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieById(id).then((response) => {
      setMovie(response);
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      {loading && !movie ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{movie?.title}</h2>
          <p>IMDB: {movie?.imdb}</p>
        </div>
      )}
    </div>
  );
};

export default Watch;
