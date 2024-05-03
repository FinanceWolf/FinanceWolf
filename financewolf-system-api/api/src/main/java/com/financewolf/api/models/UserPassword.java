package com.financewolf.api.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "password")
public class UserPassword {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPassword;

    @Column(nullable = false, length = 172)
    private String passwordHash;

    @Column(nullable = false, length = 44)
    private String passwordSalt;

    @Column(nullable = false, columnDefinition = "tinyint" /* defaultValue = 0 */)
    private int resetStatus;

    @Column(length = 8)
    private String resetCode;

    @Column(columnDefinition = "timestamp")
    private Date resetExpiration;

    public Long getIdPassword() {
        return idPassword;
    }

    public void setIdPassword(Long idPassword) {
        this.idPassword = idPassword;
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

    public String getResetCode() {
        return resetCode;
    }

    public void setResetCode(String resetCode) {
        this.resetCode = resetCode;
    }

    public Date getResetExpiration() {
        return resetExpiration;
    }

    public void setResetExpiration(Date resetExpiration) {
        this.resetExpiration = resetExpiration;
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