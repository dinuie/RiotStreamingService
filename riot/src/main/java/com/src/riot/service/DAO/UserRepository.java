package com.src.riot.service.DAO;

import com.src.riot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User,Long> {
    User createUser(User user);
    @Query(value ="select u from User u where u.userEmail=:#{#u.email}",nativeQuery = true)
    User userLogin(@Param("email") String userEmail, String userPassword);
    boolean checkUserDetails(User user);

    void removeUser(User user);
}
