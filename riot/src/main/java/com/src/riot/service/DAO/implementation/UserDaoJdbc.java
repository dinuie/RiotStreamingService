package com.src.riot.service.DAO.implementation;

import com.src.riot.model.User;
import com.src.riot.service.DAO.UserDao;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoJdbc implements UserDao {
    @Override
    public User createUser(User user) {
        return null;
    }

    @Override
    public boolean checkUserDetails(User user) {
        return false;
    }

    @Override
    public void removeUser(User user) {

    }
}
