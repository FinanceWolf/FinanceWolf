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
@Table(name = "telefone")
public class UserPhone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTel;

    @Column(name = "numero", length = 20, nullable = false, unique = true)
    private String number;

    @Column(length = 3, nullable = false)
    private String ddd;

    @Column(name = "tipo", length = 10, nullable = false)
    private String type;

    @OneToOne
    @JoinColumn(name = "idUser", nullable = false)
    private UserCredentials idUser;
}