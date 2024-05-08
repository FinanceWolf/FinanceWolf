package com.financewolf.api.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.financewolf.api.models.UserCredentials;

@Repository
public interface UserRepository extends JpaRepository<UserCredentials, Long> {
    /* @Query("SELECT u FROM UserCredentials u WHERE u.email =:email") */
    Optional<UserCredentials> findByEmail(String email);
}