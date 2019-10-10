package com.mod.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.mod.entity.MentorDetailsEntity;
import com.mod.entity.UserDetailsEntity;

public interface UserRepository extends CrudRepository<UserDetailsEntity, Integer> {
	@Query(value="select * from userdetails user where user.user_email = ?1 ",nativeQuery = true)
    UserDetailsEntity searchUserEmail(String userEmail);
}
