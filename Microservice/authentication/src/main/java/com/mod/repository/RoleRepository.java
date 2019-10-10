package com.mod.repository;


import com.mod.entity.RoleEntity;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<RoleEntity, Integer> {
    @Query(value="select * from actors a where a.actor_type = ?1 && a.actor_email = ?2 ",nativeQuery = true)
    RoleEntity searchUserName(String accountType, String userName);
}
