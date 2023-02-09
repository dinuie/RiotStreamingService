package com.src.riot.service.DAO;

import com.src.riot.model.Movie;
import com.src.riot.model.MovieGenre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}
