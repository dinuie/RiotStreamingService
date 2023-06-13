import React, { useEffect, useState } from "react";
import { Card, Row, Col, Carousel } from "antd";
import { Link } from "react-router-dom";
import { getMovieByGenre } from "../util/ApiUtils";

const SimilarMovies = ({ genreIds, history }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      let genresToSearch = genreIds;

      if (genresToSearch.length > 3) {
        genresToSearch = genresToSearch.slice(0, 3);
      }

      const moviesByGenre = await Promise.all(
        genresToSearch.map(async (genreId) => {
          const movies = await getMovieByGenre(genreId);
          return movies;
        })
      );

      const matchedMoviesMap = new Map();

      if (genresToSearch.length === 1) {
        // Only one genre, add all movies of that genre
        for (const movie of moviesByGenre[0]) {
          matchedMoviesMap.set(movie.id, movie);
        }
      } else {
        // Multiple genres, find movies that match all genres
        const chosenMovieIds = new Set(
          moviesByGenre[0].map((movie) => movie.id)
        );
        for (let i = 1; i < moviesByGenre.length; i++) {
          const genreMovies = moviesByGenre[i];
          for (const movie of genreMovies) {
            if (chosenMovieIds.has(movie.id)) {
              matchedMoviesMap.set(movie.id, movie);
            }
          }
        }
      }

      const matchedMovies = Array.from(matchedMoviesMap.values());
      setMovies(matchedMovies);
    };

    fetchSimilarMovies();
  }, [genreIds]);

  return (
    <div className="">
      <Carousel
        dots={false}
        infinite
        autoplay={true}
        speed={300}
        slidesToShow={3}
        slidesToScroll={1}
      >
        {movies.map((movie) => (
          <Link
            to={`/watch/${movie.id}`}
            key={movie.id}
            onClick={() => history.push(`/watch/${movie.id}`)}
          >
            <Row gutter={16}>
              <Col span={24}>
                <Card
                  className="border-y-4 border-purple-600 m-3 bg-black bg-opacity-50"
                  hoverable
                  cover={
                    <img
                      className="h-64 w-auto object-cover"
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt={movie.english_title}
                    />
                  }
                  bodyStyle={{ padding: "8px" }}
                >
                  <Card.Meta
                    title={
                      <div className="font-sans font-semibold text-white">
                        {movie.english_title}
                      </div>
                    }
                    description={
                      <div className="font-sans text-white">
                        <p>IMDB rating: {movie.imdb}</p>
                        <p>Release date: {movie.release_date}</p>
                        <p>Duration: {movie.runtime} min</p>
                      </div>
                    }
                  />
                </Card>
              </Col>
            </Row>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default SimilarMovies;
