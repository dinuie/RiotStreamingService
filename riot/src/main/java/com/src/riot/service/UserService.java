package com.src.riot.service;

import com.src.riot.model.Movie;
import com.src.riot.model.User;
import com.src.riot.service.DAO.*;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service("userService")
@Transactional
public class UserService extends BaseService {


    public UserService(UserRepository userRepository, MovieRepository movieRepository, RoleRepository roleRepository, MovieGenreRepository movieGenreRepository) {
        super(userRepository, movieRepository, roleRepository, movieGenreRepository);
    }

    public List<User> userList() {
        return userRepository.findAll();
    }

    public User userLoginEmail(String userEmail) {
        return userRepository.userLoginEmail(userEmail);
    }

    public User userLoginPassword(String userPassword, String userEmail) {
        return userRepository.userLoginPass(userPassword, userEmail);
    }

    public User findByUsername(String username) {
        return userRepository.findByUserName(username);
    }

    public Boolean existByEmail(String email){
        return userRepository.existsByEmail(email);
    }

    public void removeUserById(Long userId) {
        userRepository.deleteById(userId);
    }

    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public User save(User user) {
        return userRepository.save(user);
    }
//    public void addFavoriteMovie(Integer modieId){
//
//    }
    public Optional<User> findById (Long userId){return userRepository.findById(userId);}
public List<Movie> getFavoriteMovie(Long userId){return userRepository.getFavoriteMovie(userId);}
}
