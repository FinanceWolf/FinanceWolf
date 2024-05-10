package com.financewolf.api.services;

import com.financewolf.api.models.UserAddress;
import com.financewolf.api.models.UserCredentials;
import com.financewolf.api.repositories.AddressRepository;
import com.financewolf.api.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AddressServices {

    @Autowired
    private AddressRepository addressRepository;

    public UserAddress findById(Long id) {
        Optional<UserAddress> userFound = this.addressRepository.findById(id);

        return userFound.orElseThrow(() -> new RuntimeException(String.format(
                "O usuário de ID %s não foi encontrado.", id)));
    }

    @Transactional
    public UserAddress createAddress(UserAddress userAdress) {
        UserAddress newAddress = new UserAddress();

        newAddress.setCEP(userAdress.getCEP());
        newAddress.setLogradouro(userAdress.getLogradouro());
        newAddress.setNumero(userAdress.getNumero());
        newAddress.setComplemento(userAdress.getComplemento());
        newAddress.setBairro(userAdress.getBairro());
        newAddress.setCidade(userAdress.getCidade());
        newAddress.setEstado(userAdress.getEstado());
        newAddress.setUf(userAdress.getUf());



        addressRepository.save(newAddress);

        return newAddress;
    }
}