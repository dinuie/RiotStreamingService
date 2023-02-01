package com.src.riot.service;

import com.src.riot.service.DAO.MovieRepository;
import com.src.riot.service.DAO.RoleRepository;
import com.src.riot.service.DAO.UserRepository;

public class BaseService {
    protected UserRepository userRepository;
    protected MovieRepository movieRepository;
    protected RoleRepository roleRepository;

    public BaseService(UserRepository userRepository, MovieRepository movieRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.movieRepository = movieRepository;
        this.roleRepository = roleRepository;
    }
}
