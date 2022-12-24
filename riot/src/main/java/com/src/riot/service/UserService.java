package com.src.riot.service;

import com.src.riot.model.User;
import com.src.riot.service.DAO.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userDao) {
        this.userRepository = userDao;
    }

    public User createNewUser(User user) {
        User newUser = userRepository.createUser(user);
        return newUser;
    }
    public User userLogin(String userEmail, String userPassword) {
        return userRepository.userLogin(userEmail, userPassword);
    }
    public void removeUserById(Long userId){
         userRepository.deleteById(userId);
    }
}
