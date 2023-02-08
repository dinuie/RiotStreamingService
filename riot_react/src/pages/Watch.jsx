import React, { useState, useEffect } from "react";
import { getMovieById } from "../util/ApiUtils";

const Watch = (props) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (props.match && props.match.params && props.match.params.id) {
      const id = props.match.params.id;
      getMovieById(id).then((response) => {
        setMovie(response.data);
        setLoading(false);
      });
    }
  }, [props.match.params.id]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{movie.title}</h2>
          <p>IMDB: {movie.imdb}</p>
        </div>
      )}
    </div>
  );
};

export default Watch;
