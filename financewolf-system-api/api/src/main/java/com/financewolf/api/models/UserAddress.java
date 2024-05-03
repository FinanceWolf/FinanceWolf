package com.financewolf.api.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "address")
public class UserAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAddress;

    @Column(name = "CEP", columnDefinition = "CHAR(8)", nullable = false)
    private String cep;

    @Column(name = "logradouro", length = 100, nullable = false)
    private String street;

    @Column(name = "numero", columnDefinition = "CHAR(8)", nullable = true)
    private String houseNumber;

    @Column(name = "complemento", length = 100, nullable = true)
    private String complement;

    @Column(name = "bairro", length = 60, nullable = false)
    private String district;

    @Column(name = "cidade", length = 100, nullable = false)
    private String city;

    @Column(name = "estado", length = 45, nullable = false)
    private String state;

    @Column(length = 2, nullable = false)
    private String uf;

    @OneToOne
    @JoinColumn(name = "idUser")
    private UserCredentials idUser;
}