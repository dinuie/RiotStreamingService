package com.src.riot.controller;

import com.src.riot.model.Movie;
import com.src.riot.model.MovieGenre;
import com.src.riot.service.MovieGenreService;
import com.src.riot.service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class WelcomeController {

    private final MovieService movieService;
    private final MovieGenreService movieGenreService;

    public WelcomeController(MovieService movieService, MovieGenreService movieGenreService) {
        this.movieService = movieService;
        this.movieGenreService = movieGenreService;
    }


    @GetMapping
    public List<Movie> movieList() {
        return movieService.movieList();
    }

    @GetMapping("/movieGenre")
    public List<MovieGenre> movieGenreList() {
        return movieGenreService.movieGenreList();
    }

    @GetMapping("/movieByGenre")
    public Set<Movie> getMovieByGenre(@RequestParam(value = "genreName") Long genreId) {
        return movieGenreService.getMovieByGenreId(genreId);
    }

}


