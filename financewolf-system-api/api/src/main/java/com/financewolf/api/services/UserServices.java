package com.financewolf.api.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.financewolf.api.models.UserCredentials;
import com.financewolf.api.models.UserPassword;
import com.financewolf.api.repositories.UserRepository;

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

    public UserCredentials findByEmail(String email) {
        UserCredentials userFound = this.userRepository.findByEmail(email);

        System.out.println("Email recebido: " + email);

        return userFound; /* .orElseThrow(() -> new RuntimeException(String.format("O usuário com o email %s não foi encontrado.", email))); */
    }

    public UserCredentials loginUser(UserCredentials loginInfo) {
        UserCredentials userFound = this.userRepository.findByEmail(loginInfo.getEmail());

        if(userFound == null) {
            System.out.println(String.format("Usuário com email %s não existe.", loginInfo.getEmail()));

            return loginInfo; // Retornamos o próprio loginInfo pois ele não tem ID. Se um modelo de usuário preenchido não tiver a informação de ID, significa que ele não existe.
        }

        UserPassword userPassword = this.passwordService.findById(userFound.getIdPassword().getId());

        if(loginInfo.getPassword().equals(userPassword.getPasswordHash())) {
            System.out.println("As senhas batem, o login pode ser feito.");

            return userFound;
        } else {
            return loginInfo; // Mesma situação lá em cima. O loginInfo não possui ID.
        }
    }

    @Transactional
    public UserCredentials createUser(UserCredentials userReceivedData) {
        userReceivedData.setId(null); // Vai impedir que, de alguma forma, o ID seja inserido préviamente na criação do user

        // Aqui a gente cria a tabela de senha primeiro e armazenamos o modelo nessa variável. A partir disso, a gente pega esse modelo e seta o idPassword lá no modelo de usuário pra criar o relacionamento!
        UserPassword passId = this.passwordService.createPassword(userReceivedData.getPassword());
        userReceivedData.setIdPassword(passId); 


        this.userRepository.save(userReceivedData);
        return userReceivedData;
    }
}