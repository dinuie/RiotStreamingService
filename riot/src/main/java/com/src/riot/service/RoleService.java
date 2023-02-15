package com.src.riot.service;

import com.src.riot.model.Role;
import com.src.riot.model.types.RoleName;
import com.src.riot.service.DAO.*;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService extends BaseService{


    public RoleService(UserRepository userRepository, MovieRepository movieRepository, RoleRepository roleRepository, MovieGenreRepository movieGenreRepository) {
        super(userRepository, movieRepository, roleRepository, movieGenreRepository);
    }

    public Optional<Role> findRoleByName(int roleId){return roleRepository.findById((long) roleId);}
}
