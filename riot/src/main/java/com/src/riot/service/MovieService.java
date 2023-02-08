package com.src.riot.service;

import com.src.riot.model.Movie;
import com.src.riot.service.DAO.MovieRepository;
import com.src.riot.service.DAO.RoleRepository;
import com.src.riot.service.DAO.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService extends BaseService {
    public MovieService(UserRepository userRepository, MovieRepository movieRepository, RoleRepository roleRepository) {
        super(userRepository, movieRepository, roleRepository);
    }


    public void saveNewMovie(Movie movie){
        movieRepository.save(movie);
    }

    public List<Movie> movieList(){
        return movieRepository.findAll();
    }
    public Optional<Movie> getMovieById(Long movieId){return movieRepository.findById(movieId);}
}
