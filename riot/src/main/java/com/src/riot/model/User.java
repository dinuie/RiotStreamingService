package com.src.riot.model;


import com.src.riot.model.types.UserStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "users")
public class User {
    @Id
    @Column(unique = true)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(unique = true)
    private String userName;
    private LocalDate userDateOfBirth;
    @Column(unique = true)
    private String userEmail;
    private String userPassword;
    @Enumerated(value = EnumType.STRING)
    private UserStatus userStatus;

}
