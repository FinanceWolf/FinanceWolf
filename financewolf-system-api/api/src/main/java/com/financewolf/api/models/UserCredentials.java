package com.financewolf.api.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_credentials")
public class UserCredentials {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;

    @Column (name = "name", length = 80, nullable = false)
    private String name;

    @Column (name = "username", length = 15, nullable = false, unique = true)
    private String username;

    @Column (name = "email", length = 60, nullable = false, unique = true)
    private String email;
    
    @Column (name = "RG", columnDefinition = "CHAR(9)", nullable = false)
    private String rg;

    @Column (name = "cpf", columnDefinition = "CHAR(11)", nullable = false, unique = true)
    private String cpf;

    @Column (name = "datanasc", nullable = false)
    private Date birthdate;

    @OneToOne
    @JoinColumn(name = "idPassword")
    private UserPassword idPassword;
    
    @Column (name = "datareg", nullable = false)
    private Date registerDate; // Alterar depois

    public Long getId() {
        return idUser;
    }

    public void setId(Long id) {
        this.idUser = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((email == null) ? 0 : email.hashCode());
        result = prime * result + ((rg == null) ? 0 : rg.hashCode());
        result = prime * result + ((cpf == null) ? 0 : cpf.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        UserCredentials other = (UserCredentials) obj;
        if (email == null) {
            if (other.email != null)
                return false;
        } else if (!email.equals(other.email))
            return false;
        if (rg == null) {
            if (other.rg != null)
                return false;
        } else if (!rg.equals(other.rg))
            return false;
        if (cpf == null) {
            if (other.cpf != null)
                return false;
        } else if (!cpf.equals(other.cpf))
            return false;
        return true;
    }
}