package com.src.riot.service;

import com.src.riot.model.Movie;
import com.src.riot.model.MovieGenre;
import com.src.riot.service.DAO.MovieGenreRepository;
import com.src.riot.service.DAO.MovieRepository;
import com.src.riot.service.DAO.RoleRepository;
import com.src.riot.service.DAO.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class MovieGenreService extends BaseService {
    public MovieGenreService(UserRepository userRepository, MovieRepository movieRepository, RoleRepository roleRepository, MovieGenreRepository movieGenreRepository) {
        super(userRepository, movieRepository, roleRepository, movieGenreRepository);
    }

    public MovieGenre addMovieGenre(MovieGenre movieGenre) {
        return movieGenreRepository.save(movieGenre);
    }

    public Optional<MovieGenre> getMovieGenre(Long id) {
        return movieGenreRepository.findById(id);
    }

    public List<MovieGenre> movieGenreList() {
        return movieGenreRepository.findAll();
    }

    public Set<Movie> getMovieByGenreId(Long movieGenre) {
        Set<Movie> movieSet= movieGenreRepository.findById(movieGenre).get().getMoviesSet();
        return movieSet;
    }

}
