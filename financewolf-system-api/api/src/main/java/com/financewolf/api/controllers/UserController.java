package com.financewolf.api.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.financewolf.api.models.UserCredentials;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.financewolf.api.services.UserServices;

@RestController
@RequestMapping("/user")
@Validated
public class UserController {

    @Autowired
    private UserServices userServices;

    @GetMapping("/{id}")
    public ResponseEntity<UserCredentials> findById(@PathVariable Long id) {
        UserCredentials userFound = this.userServices.findById(id);

        return ResponseEntity.ok().body(userFound);
    }
}