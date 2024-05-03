package com.financewolf.api.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.financewolf.api.models.UserCredentials;
import com.financewolf.api.repositories.UserRepository;

@Service
public class UserServices {
    
    @Autowired
    private UserRepository userRepository; 

    public UserCredentials findById(Long id) {
        Optional<UserCredentials> userFound = this.userRepository.findById(id);

        return userFound.orElseThrow(() -> new RuntimeException(String.format(
            "O usuário de ID não foi encontrado.", id)));
    }
}