import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Watch() {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8080/api/${id}`);
      const movie = await response.json();
      setMovie(movie);
    }
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <h1>{movie.enName}</h1>
      <p>{movie.year}</p>
      <p>{movie.imbd}</p>
      <p>{movie.time}</p>
      <p>{movie.img}</p>
    </div>
  );
}

export default Watch;
