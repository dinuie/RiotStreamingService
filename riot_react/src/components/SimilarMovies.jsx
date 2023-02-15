import React, { useEffect, useState } from "react";
import { Card, Row, Col, Carousel } from "antd";
import { Link } from "react-router-dom";
import { getMovieByGenre } from "../util/ApiUtils";

const SimilarMovies = ({ genreIds }) => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      const response = await getMovieByGenre(genreIds[0]);
      setMovies(response);
    };
    fetchSimilarMovies();
  }, [genreIds]);

  const handleCardClick = (movie) => {
    setCurrentMovie(movie);
  };

  return (
    <div className="m-10">
      <h2 className="text-2xl text-white font-sans font-semibold m-3">
        You might also like:
      </h2>
      <Carousel
        dots={false}
        infinite
        autoplay
        speed={300}
        slidesToShow={3}
        slidesToScroll={1}
      >
        {movies.map((movie) => (
          <Link
            to={`/watch/${movie.id}`}
            key={movie.id}
            onClick={() => this.props.history.push(`/watch/${movie.id}`)()}
          >
            <Row gutter={16}>
              <Col span={24}>
                <Card
                  className="border-y-4 border-purple-600 m-3"
                  hoverable
                  onClick={() => handleCardClick(movie)}
                  cover={
                    <img
                      className="h-64 w-auto object-cover"
                      src={
                        `https://image.tmdb.org/t/p/w500` + movie.backdrop_path
                      }
                      alt={movie.english_title}
                    />
                  }
                  bodyStyle={{ padding: "8px" }}
                >
                  <Card.Meta
                    title={movie.english_title}
                    description={
                      <div className="font-sans font-semibold text-lightgrey">
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
