package com.src.riot.service;

import com.src.riot.model.MovieGenre;
import com.src.riot.service.DAO.*;

public class BaseService {
    protected UserRepository userRepository;
    protected MovieRepository movieRepository;
    protected RoleRepository roleRepository;
    protected MovieGenreRepository movieGenreRepository;

    public BaseService(UserRepository userRepository, MovieRepository movieRepository, RoleRepository roleRepository,MovieGenreRepository movieGenreRepository) {
        this.userRepository = userRepository;
        this.movieRepository = movieRepository;
        this.roleRepository = roleRepository;
        this.movieGenreRepository=movieGenreRepository;
    }
}
