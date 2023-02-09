package com.src.riot.controller;

import com.src.riot.model.Movie;
import com.src.riot.model.MovieGenre;
import com.src.riot.service.MovieGenreService;
import com.src.riot.service.MovieService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/movie")
public class MovieController {
    private final MovieService movieService;
    private final MovieGenreService movieGenreService;

    public MovieController(MovieService movieService, MovieGenreService movieGenreService) {
        this.movieService = movieService;
        this.movieGenreService = movieGenreService;
    }


    @PostMapping
    public ResponseEntity<String> addNewFilm(@RequestBody List<Movie> movie) {
        for (Movie oneMovie : movie) {
            movieService.saveNewMovie(oneMovie);
        }
        return ResponseEntity.ok("Movie added");
    }

    @PostMapping("/movieGenre")
    public ResponseEntity<String> addMovieGenre(@RequestBody List<MovieGenre> movieGenres){
        for (MovieGenre genre:movieGenres) {
            movieGenreService.addMovieGenre(genre);
        }
    return ResponseEntity.ok("Genre added");
    }
}
