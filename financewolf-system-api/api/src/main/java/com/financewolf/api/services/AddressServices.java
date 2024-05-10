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
        newAddress.setStreet(userAdress.getStreet());
        newAddress.setNumber(userAdress.getNumber());
        newAddress.setComplement(userAdress.getComplement());
        newAddress.setNeighborhood(userAdress.getNeighborhood());
        newAddress.setCity(userAdress.getCity());
        newAddress.setState(userAdress.getState());
        newAddress.setUf(userAdress.getUf());



        addressRepository.save(newAddress);

        return newAddress;
    }
}