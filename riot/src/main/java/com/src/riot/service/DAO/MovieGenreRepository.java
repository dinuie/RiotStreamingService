package com.src.riot.service.DAO;

import com.src.riot.model.Movie;
import com.src.riot.model.MovieGenre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MovieGenreRepository extends JpaRepository<MovieGenre,Long> {}
