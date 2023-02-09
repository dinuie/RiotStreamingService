package com.src.riot.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MovieGenre {
    @Id
    private Long id;
    private String Name;
    @JsonManagedReference
    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(name = "movie_genre_ids",
            joinColumns = @JoinColumn(name = "genre_ids"),
            inverseJoinColumns = @JoinColumn(name = "movie_id"))
    private Set<Movie> moviesSet = new HashSet<>();

}
