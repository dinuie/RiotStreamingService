package com.src.riot.controller;

import com.src.riot.model.Movie;
import com.src.riot.model.User;
import com.src.riot.service.MovieService;
import com.src.riot.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WelcomeController {

    private final MovieService movieService;

    public WelcomeController(MovieService movieService, UserService userService) {
        this.movieService = movieService;
    }


    @GetMapping
    public List<Movie> movieList() {
        return movieService.movieList();
    }
}


