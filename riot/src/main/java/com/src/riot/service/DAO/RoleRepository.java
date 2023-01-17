package com.src.riot.service.DAO;

import com.src.riot.model.Role;
import com.src.riot.model.types.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends
        JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);

}