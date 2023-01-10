package com.src.riot.service.DAO;

import com.src.riot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User,Long> {
//    User createUser(User user);
    @Query("SELECT u FROM User u where u.userEmail=?1")
    User userLoginEmail(String userEmail);
    @Query("SELECT u FROM User u where u.userPassword=?1 and u.userEmail=?2")
    User userLoginPass(String userPassword,String userEmail);
//    boolean checkUserDetails(User user);
//
//    void removeUser(User user);
}
