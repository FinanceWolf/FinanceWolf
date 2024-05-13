package com.financewolf.api.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.financewolf.api.models.UserAddress;
import com.financewolf.api.models.UserCredentials;

import java.net.URI;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.datasource.UserCredentialsDataSourceAdapter;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.financewolf.api.services.AddressServices;
import com.financewolf.api.services.UserServices;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/users")
@Validated
public class UserController {

    @Autowired
    private UserServices userServices;

    @Autowired
    private AddressServices addressServices;

/*     @GetMapping("/")
    public ResponseEntity<UserCredentials> getAllAcounts() {
        UserCredentials users = this.userServices.findAll();
    } */

    @GetMapping("/{id}")
    public ResponseEntity<UserCredentials> findById(@PathVariable Long id) {
        UserCredentials userFound = this.userServices.findById(id);
    
        return ResponseEntity.ok().body(userFound);
    }

    @PostMapping("/login")
    public ResponseEntity<UserCredentials> userLogin(@RequestBody UserCredentials loginInfo) {
        UserCredentials login = this.userServices.loginUser(loginInfo);

        if(login.getId() != null) {
            return ResponseEntity.ok().body(login);
        }

        return new ResponseEntity<UserCredentials>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/create")
    @Validated
    public ResponseEntity<Void> createUser(@RequestBody UserCredentials userReceivedInfo) {
        this.userServices.createUser(userReceivedInfo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(userReceivedInfo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }


}