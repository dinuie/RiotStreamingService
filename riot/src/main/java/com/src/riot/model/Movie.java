package com.src.riot.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "movies")
public class Movie {
    @Id
    @Column(unique = true)
    private Long id;

    private Long tmbd_id;

    private String imdb_id;
    private String title;
    private String english_title;
    private String backdrop_path;
    private float imdb;
    private String release_date;
    private int runtime;
    @ElementCollection
    private List<Integer> genre_ids;
    private String hash;
    private String update;
//    @JsonManagedReference
//    @ManyToMany(cascade = {CascadeType.ALL})
//    @JoinTable(name = "movie_genre_ids",
//            joinColumns = @JoinColumn(name = "movie_id"),
//            inverseJoinColumns = @JoinColumn(name = "enre_ids"))
//    private Set<MovieGenre> movieGenreSet = new HashSet<>();




}
