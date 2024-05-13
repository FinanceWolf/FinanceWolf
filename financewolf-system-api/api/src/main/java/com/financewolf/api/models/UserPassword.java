package com.financewolf.api.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "password")
public class UserPassword {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 172)
    private String passwordHash; // Senha criptografada em hexadecimal

    @Column(nullable = false, length = 44)
    private String passwordSalt; // Senha criptografada em tipo de cripografia "embaralhada"

    @Column(nullable = false, columnDefinition = "tinyint" /* defaultValue = 0 */)
    private int resetStatus; // Saber se a pessoa já resetou a senha

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "alteradaEm", nullable = false)
    private Date lastTimeChanged; // Guarda a informação de quando o usuário trocou a senha pela última vez

    public Long getId() {
        return id;
    }

    public void setId(Long idPassword) {
        this.id = idPassword;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getPasswordSalt() {
        return passwordSalt;
    }

    public void setPasswordSalt(String passwordSalt) {
        this.passwordSalt = passwordSalt;
    }

    public int getResetStatus() {
        return resetStatus;
    }

    public void setResetStatus(int resetStatus) {
        this.resetStatus = resetStatus;
    }

    public Date getlastTimeChanged() {
        return lastTimeChanged;
    }

    public void setLastTimeChanged(Date lastTimeChanged) {
        this.lastTimeChanged = lastTimeChanged;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((passwordHash == null) ? 0 : passwordHash.hashCode());
        result = prime * result + ((passwordSalt == null) ? 0 : passwordSalt.hashCode());
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
        UserPassword other = (UserPassword) obj;
        if (passwordHash == null) {
            if (other.passwordHash != null)
                return false;
        } else if (!passwordHash.equals(other.passwordHash))
            return false;
        if (passwordSalt == null) {
            if (other.passwordSalt != null)
                return false;
        } else if (!passwordSalt.equals(other.passwordSalt))
            return false;
        return true;
    }
}