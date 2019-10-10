package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.UserBlock;

@Repository
public interface UserBlockRepository extends CrudRepository<UserBlock, String>{

	UserBlock findByUsername(String username);

	void deleteByUsername(String username);

}
