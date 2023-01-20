package com.src.riot.service.DAO;

import com.src.riot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
public interface UserRepository extends JpaRepository<User, Long> {
    //    User createUser(User user);
    @Query("SELECT u FROM User u where u.userEmail=?1")
    User userLoginEmail(String userEmail);

    @Query("SELECT u FROM User u where u.userPassword=?1 and u.userEmail=?2")
    User userLoginPass(String userPassword, String userEmail);

    @Query("SELECT username from User where username=?1")
    User findByUserName(String Name);

    @Query("SELECT userEmail from User where userEmail=?1")
    Optional<User> findByEmail(String email);

    @Query("SELECT u from User u where u.username=?1 ")
    Optional<User> findByUsernameOrEmail(String username, String email);

    @Query("select id from User where id=?1")
    List<User> findByIdIn(List<Long> userIds);

    @Query("SELECT username from User where username=?1")
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

//    Boolean existsByEmail(String email);
//    boolean checkUserDetails(User user);
//
//    void removeUser(User user);
}
