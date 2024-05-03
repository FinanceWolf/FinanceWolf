package com.financewolf.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.financewolf.api.models.UserCredentials;

@Repository
public interface UserRepository extends JpaRepository<UserCredentials, Long> {

}