package com.src.riot.controller;

import com.src.riot.model.Movie;
import com.src.riot.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class MovieController {
    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @PostMapping
    public ResponseEntity<String> addNewFilm(@RequestBody List<Movie> movie) {
        for (Movie oneMovie : movie) {
            movieService.saveNewMovie(oneMovie);
        }
        return ResponseEntity.ok("Movie added");
    }
}
