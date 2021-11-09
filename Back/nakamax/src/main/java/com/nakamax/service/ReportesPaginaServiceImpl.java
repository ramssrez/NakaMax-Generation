package com.nakamax.service;

import com.nakamax.model.ReportesPagina;
import com.nakamax.repository.ReportesPaginaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReportesPaginaServiceImpl implements ReportesPaginaService{
    private final ReportesPaginaRepository reportesPaginaRepository;

    public ReportesPaginaServiceImpl(ReportesPaginaRepository reportesPaginaRepository){
        this.reportesPaginaRepository = reportesPaginaRepository;
    }

    @Override
    public ReportesPagina save(ReportesPagina reportesPagina) {
        return reportesPaginaRepository.save(reportesPagina);
    }

    @Override
    public List<ReportesPagina> getReportes() {
        return (List<ReportesPagina>) reportesPaginaRepository.findAll();
    }

    @Override
    public ReportesPagina getReportePagina(Integer id) {
        Optional<ReportesPagina> reportesPagina = reportesPaginaRepository.findById(id);
        return reportesPagina.orElse(null);
    }

    @Override
    public void delete(Integer id) {
        reportesPaginaRepository.deleteById(id);
    }
}
