package com.src.riot.model;


import com.src.riot.model.types.UserStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.NaturalId;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Objects;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
@Getter
@Table(name = "users")
public class User {
    @Id
    @Column(unique = true)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(unique = true)
    @NotBlank
    @Size(max = 40)
    private String userName;
    private LocalDate userDateOfBirth;
    @Column(unique = true)
    @NaturalId
    @NotBlank
    @Size(max = 40)
    @Email
    private String userEmail;
    @NotBlank
    @Size(max = 40)
    private String userPassword;
    @ManyToMany
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(
                    name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "role_id", referencedColumnName = "id"))
    private Collection<Role> roles;

//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
//        User user = (User) o;
//        return id != null && Objects.equals(id, user.id);
//    }
//
//    @Override
//    public int hashCode() {
//        return getClass().hashCode();
//    }

}
