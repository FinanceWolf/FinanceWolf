package com.financewolf.api.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "address")
public class UserAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdEnd;

    @Column(name = "cep", columnDefinition = "CHAR(9)", nullable = false)
    private String CEP;

    @Column(name = "logradouro", length = 100, nullable = false)
    private String logradouro;

    @Column(name = "numero", length = 30, nullable = true)
    private String numero;

    @Column(name = "complemento", length = 100, nullable = true)
    private String complemento;

    @Column(name = "bairro", length = 60, nullable = false)
    private String bairro;

    @Column(name = "cidade", length = 100, nullable = false)
    private String cidade;

    @Column(name = "estado", length = 45, nullable = false)
    private String estado;

    @Column(name = "uf", columnDefinition = "CHAR(2)", nullable = false)
    private String uf;

    @OneToOne
    @JoinColumn(name = "end_idUser")
    private UserPassword end_idUser;


    public Long getIdEnd() {
        return IdEnd;
    }

    public void setIdEnd(Long idEnd) {
        IdEnd = idEnd;
    }

    public String getCEP() {
        return CEP;
    }

    public void setCEP(String CEP) {
        this.CEP = CEP;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
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

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserAddress that = (UserAddress) o;
        return Objects.equals(IdEnd, that.IdEnd) && Objects.equals(CEP, that.CEP) && Objects.equals(logradouro, that.logradouro) && Objects.equals(numero, that.numero) && Objects.equals(complemento, that.complemento) && Objects.equals(bairro, that.bairro) && Objects.equals(cidade, that.cidade) && Objects.equals(estado, that.estado) && Objects.equals(uf, that.uf) && Objects.equals(end_idUser, that.end_idUser);
    }

    @Override
    public int hashCode() {
        return Objects.hash(IdEnd, CEP, logradouro, numero, complemento, bairro, cidade, estado, uf, end_idUser);
    }
}
