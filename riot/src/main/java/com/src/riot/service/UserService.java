package com.src.riot.service;

import com.src.riot.model.User;
import com.src.riot.service.DAO.RoleRepository;
import com.src.riot.service.DAO.UserRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("userService")
@Transactional
public class UserService  {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
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

    public User userLoginPassword(String userPassword, String userEmail) {
        return userRepository.userLoginPass(userPassword, userEmail);
    }


    public void removeUserById(Long userId) {
        userRepository.deleteById(userId);
    }

}
