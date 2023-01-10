package com.src.riot.service;

import com.src.riot.model.User;
import com.src.riot.service.DAO.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userDao) {
        this.userRepository = userDao;
    }

//    public User createNewUser(User user) {
//        User newUser = userRepository.createUser(user);
//        return newUser;
//    }

    public List<User> userList() {
        return userRepository.findAll();
    }

    public User userLoginEmail(String userEmail) {
        return userRepository.userLoginEmail(userEmail);
    }

    public User userLoginPassword(String userPassword,String userEmail) {
        return userRepository.userLoginPass(userPassword,userEmail);
    }


    public void removeUserById(Long userId) {
        userRepository.deleteById(userId);
    }
}
