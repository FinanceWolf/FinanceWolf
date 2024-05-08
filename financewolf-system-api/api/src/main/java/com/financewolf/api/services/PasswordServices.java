package com.financewolf.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.financewolf.api.repositories.PasswordRepository;
import com.financewolf.api.models.UserPassword;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@Service
public class PasswordServices {

    @Autowired
    private PasswordRepository passwordRepository;

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