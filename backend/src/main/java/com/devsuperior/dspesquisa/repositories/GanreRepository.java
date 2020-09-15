package com.devsuperior.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dspesquisa.entities.Genre;

@Repository
public interface GanreRepository extends JpaRepository<Genre, Long> {
	
	
	
	

}
