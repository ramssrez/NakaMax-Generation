package com.nakamax.service;

import com.nakamax.model.ReportesPagina;

import java.util.ArrayList;
import java.util.Optional;

public interface ReportesPaginaService {
    ReportesPagina save(ReportesPagina reportesPagina); //guardar nuevo reporte
    ArrayList<ReportesPagina> findAll(); // trae todos los reportes
    Optional<ReportesPagina> findById(Integer id); //obtiene reporte por id
    void delete(Integer id);
}
