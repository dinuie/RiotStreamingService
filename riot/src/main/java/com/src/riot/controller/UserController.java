package com.src.riot.controller;

import com.src.riot.exception.ResourceNotFoundException;
import com.src.riot.model.Movie;
import com.src.riot.model.MovieGenre;
import com.src.riot.model.User;
import com.src.riot.payload.UserIdentityAvailability;
import com.src.riot.payload.UserSummary;
import com.src.riot.service.MovieGenreService;
import com.src.riot.service.MovieService;
import com.src.riot.service.UserService;
import com.src.riot.service.security.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    MovieService movieService;
    @Autowired
    MovieGenreService movieGenreService;


    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @GetMapping("/")
    @PreAuthorize("hasRole('USER')")
    public UserSummary getCurrentUser(@AuthenticationPrincipal UserPrincipal currentUser) {
        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getUsername(), currentUser.getName());
        return userSummary;
    }

    @GetMapping("/movieGenre")
    public List<MovieGenre> movieGenreList() {
        return movieGenreService.movieGenreList();
    }

    @GetMapping("/movieByGenre")
    public Set<Movie> getMovieByGenre(@RequestParam(value = "genreId") Long genreId) {
        return movieGenreService.getMovieByGenreId(genreId);
    }

    @GetMapping("/watch")
    public Optional<Movie> getMovieById(@RequestParam(value = "movieId") Long movieId) {
        return movieService.getMovieById(movieId);
    }

    @PostMapping("/watch")
    public Optional<Movie> getMovieId(@RequestParam(value = "movieId") Long movieId) {
        return movieService.getMovieById(movieId);
    }

    @GetMapping("/user/checkUsernameAvailability")
    public UserIdentityAvailability checkUsernameAvailability(@RequestParam(value = "username") String username) {
        Boolean isAvailable = !userService.existsByUsername(username);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/user/checkEmailAvailability")
    public UserIdentityAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
        Boolean isAvailable = !userService.existByEmail(email);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/users")
    public User getUserProfile(@PathVariable(value = "username") String username) {
        User user = userService.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", username));
        user.getUsername();

//        UserProfile userProfile = new UserProfile(user.getId(), user.getUsername(), user.getName(), user.getCreatedAt());
        return user;
    }


}