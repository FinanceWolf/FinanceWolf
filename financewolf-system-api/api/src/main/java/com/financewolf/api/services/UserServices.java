package com.financewolf.api.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.financewolf.api.models.UserCredentials;
import com.financewolf.api.models.UserPassword;
import com.financewolf.api.repositories.UserRepository;
import com.financewolf.api.services.PasswordServices;

import jakarta.transaction.Transactional;

@Service
public class UserServices {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordServices passwordService;

    public UserCredentials findById(Long id) {
        Optional<UserCredentials> userFound = this.userRepository.findById(id);

        return userFound.orElseThrow(() -> new RuntimeException(String.format(
            "O usuário de ID %s não foi encontrado.", id)));
    }

    @Transactional
    public UserCredentials createUser(UserCredentials userReceivedData) {
        userReceivedData.setId(null); // Vai impedir que, de alguma forma, o ID seja inserido préviamente na criação do user

        System.out.println("A PORRA DA SENHA: " + userReceivedData.getPassword());

        this.passwordService.createPassword(userReceivedData.getPassword());

        this.userRepository.save(userReceivedData);
        return userReceivedData;
    }
}