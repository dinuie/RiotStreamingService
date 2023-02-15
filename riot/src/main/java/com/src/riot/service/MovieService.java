package com.src.riot.service;

import com.src.riot.model.Movie;
import com.src.riot.service.DAO.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class MovieService extends BaseService {


    public MovieService(UserRepository userRepository, MovieRepository movieRepository, RoleRepository roleRepository, MovieGenreRepository movieGenreRepository) {
        super(userRepository, movieRepository, roleRepository, movieGenreRepository);
    }

    public void saveNewMovie(Movie movie) {
        movieRepository.save(movie);
    }

    public List<Movie> movieList() {
        return movieRepository.findAll();
    }

    public Optional<Movie> getMovieById(Long movieId) {
        return movieRepository.findById(movieId);
    }

    public List<Movie> getMoviesByYearRelease(String id) {
        return movieRepository.getMoviesByYear(id);
    }

    public List<String> getYear() {
        return movieRepository.getYears();
    }

    public Optional<Movie> findById(Long id) {
        return movieRepository.findById(id);
    }

    public Set<String> findGenresByMovieId(Long movieId) {
        return movieRepository.findGenresByMovieId(movieId);
    }
}
