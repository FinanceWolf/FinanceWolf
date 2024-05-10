package com.financewolf.api.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Encypter {
    public static String encoder(String pass) {
        BCryptPasswordEncoder encoderPass = new BCryptPasswordEncoder();
        return encoderPass.encode(pass);
    }
}