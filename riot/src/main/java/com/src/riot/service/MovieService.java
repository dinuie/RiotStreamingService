package com.src.riot.service;

import com.src.riot.model.Movie;
import com.src.riot.service.DAO.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public void saveNewMovie(Movie movie){
        movieRepository.save(movie);
    }

    public List<Movie> movieList(){
        return movieRepository.findAll();
    }
}
