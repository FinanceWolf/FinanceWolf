package com.financewolf.api.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.financewolf.api.models.UserCredentials;

import java.net.URI;
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/users")
@Validated
public class UserController {

    @Autowired
    private UserServices userServices;

/*     @GetMapping("/")
    public ResponseEntity<UserCredentials> getAllAcounts() {
        UserCredentials users = this.userServices.findAll();
    } */

    @GetMapping("/{id}")
    public ResponseEntity<UserCredentials> findById(@PathVariable Long id) {
        UserCredentials userFound = this.userServices.findById(id);
    
        return ResponseEntity.ok().body(userFound);
    }

    @PostMapping("/findUser")
    @Validated
    public ResponseEntity<UserCredentials> findUser(@RequestBody String email) {
        UserCredentials userFound = this.userServices.findByEmail(email);

        return ResponseEntity.ok().body(userFound);
    }

    @PostMapping("/create")
    @Validated
    public ResponseEntity<Void> createUser(@RequestBody UserCredentials userReceivedInfo) {
        this.userServices.createUser(userReceivedInfo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(userReceivedInfo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}