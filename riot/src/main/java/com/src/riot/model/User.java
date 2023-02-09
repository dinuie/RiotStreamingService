package com.src.riot.model;


import com.src.riot.model.types.RoleName;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.NaturalId;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(unique = true)
    @NotBlank
    @Size(max = 40)
    private String username;
    @NotBlank
    private String userDateOfBirth;
    @Column(unique = true)
    @NaturalId
    @NotBlank
    @Size(max = 40)
    @Email
    private String userEmail;
    @NotBlank
    @Size(max = 4000)
    private String userPassword;
    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();



    public User(String userName, String userDateOfBirth, String userEmail, String userPassword) {
        this.username = userName;
        this.userDateOfBirth = userDateOfBirth;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    public void addRole(Role role){
        roles.add(role);
        role.getUserSet().add(this);
    }


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
