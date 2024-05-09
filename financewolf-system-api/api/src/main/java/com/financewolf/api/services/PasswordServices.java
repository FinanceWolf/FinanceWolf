package com.financewolf.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.financewolf.api.repositories.PasswordRepository;

import jakarta.transaction.Transactional;

import com.financewolf.api.models.UserPassword;

import java.util.Date;
import java.util.Optional;

@Service
public class PasswordServices {

    @Autowired
    private PasswordRepository passwordRepository;

    public UserPassword findById(Long id) {
        Optional<UserPassword> passFound = this.passwordRepository.findById(id);

        return passFound.orElseThrow(() -> new RuntimeException("Ocorreu algum erro ao procurar a senha."));
    }

    @Transactional
    public UserPassword createPassword(String password) {
        UserPassword passwordModel = new UserPassword();
        Date date = new Date();

        passwordModel.setPasswordHash(password);
        passwordModel.setPasswordSalt(password);
        passwordModel.setResetStatus(0);
        passwordModel.setResetExpiration(date);

        this.passwordRepository.save(passwordModel);

        /* return passwordModel.getIdPassword(); */
        return passwordModel;
    }
}