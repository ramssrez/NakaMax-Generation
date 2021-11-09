package com.nakamax.service;

import com.nakamax.model.ReportesPagina;

import java.util.List;

public interface ReportesPaginaService {
    ReportesPagina save(ReportesPagina reportesPagina);
    List<ReportesPagina> getReportes();
    ReportesPagina getReportePagina(Integer id);
    void delete(Integer id);
}
