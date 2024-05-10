package com.financewolf.api.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "address")
public class UserAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEnd;

    @Column(name = "cep", columnDefinition = "CHAR(9)", nullable = false)
    private String cep;

    @Column(name = "logradouro", length = 100, nullable = false)
    private String street;

    @Column(name = "numero", length = 30, nullable = true)
    private String number;

    @Column(name = "complemento", length = 100, nullable = true)
    private String complement;

    @Column(name = "bairro", length = 60, nullable = false)
    private String neighborhood;

    @Column(name = "cidade", length = 100, nullable = false)
    private String city;

    @Column(name = "estado", length = 45, nullable = false)
    private String state;

    @Column(name = "uf", columnDefinition = "CHAR(2)", nullable = false)
    private String uf;

    @OneToOne
    @JoinColumn(name = "idUser")
    private UserPassword end_idUser;


    public Long getIdEnd() {
        return idEnd;
    }

    public void setIdEnd(Long idEnd) {
        idEnd = idEnd;
    }

    public String getCEP() {
        return cep;
    }

    public void setCEP(String CEP) {
        this.cep = cep;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getComplement() {
        return complement;
    }

    public void setComplement(String complement) {
        this.complement = complement;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public UserPassword getEnd_idUser() {
        return end_idUser;
    }

    public void setEnd_idUser(UserPassword idUser) {
        this.end_idUser = idUser;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((street == null) ? 0 : street.hashCode());
        result = prime * result + ((number == null) ? 0 : number.hashCode());
        result = prime * result + ((neighborhood == null) ? 0 : neighborhood.hashCode());
        result = prime * result + ((state == null) ? 0 : state.hashCode());
        result = prime * result + ((uf == null) ? 0 : uf.hashCode());
        result = prime * result + ((end_idUser == null) ? 0 : end_idUser.hashCode());
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
        UserAddress other = (UserAddress) obj;
        if (street == null) {
            if (other.street != null)
                return false;
        } else if (!street.equals(other.street))
            return false;
        if (number == null) {
            if (other.number != null)
                return false;
        } else if (!number.equals(other.number))
            return false;
        if (neighborhood == null) {
            if (other.neighborhood != null)
                return false;
        } else if (!neighborhood.equals(other.neighborhood))
            return false;
        if (state == null) {
            if (other.state != null)
                return false;
        } else if (!state.equals(other.state))
            return false;
        if (uf == null) {
            if (other.uf != null)
                return false;
        } else if (!uf.equals(other.uf))
            return false;
        if (end_idUser == null) {
            if (other.end_idUser != null)
                return false;
        } else if (!end_idUser.equals(other.end_idUser))
            return false;
        return true;
    }

    
}
