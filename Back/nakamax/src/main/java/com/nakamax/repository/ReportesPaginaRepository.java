package com.nakamax.repository;

import com.nakamax.model.ReportesPagina;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface ReportesPaginaRepository extends CrudRepository<ReportesPagina, Integer> {
    ArrayList<ReportesPagina> findAll();
}
