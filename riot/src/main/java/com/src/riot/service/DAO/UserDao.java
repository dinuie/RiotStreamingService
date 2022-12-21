package com.src.riot.service.DAO;

import com.src.riot.model.User;

public interface UserDao {
    User createUser(User user);

    boolean checkUserDetails(User user);

    void removeUser(User user);
}
