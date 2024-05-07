package com.financewolf.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.financewolf.api.models.UserPassword;

@Repository
public interface PasswordRepository extends JpaRepository<UserPassword, Long> {
    
}