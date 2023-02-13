package com.src.riot.service.DAO;

import com.src.riot.model.Movie;
import com.src.riot.model.MovieGenre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    @Query("SELECT u FROM Movie u where  EXTRACT(YEAR FROM TO_DATE(u.release_date, 'YYYY-MM-DD'))=?1")
    List<Movie> getMoviesByYear(String movieYearRelease);
    @Query("Select DISTINCT  EXTRACT(YEAR FROM TO_DATE(u.release_date, 'YYYY-MM-DD')) as year from Movie u order by year DESC ")
    List<String> getYears();
}
