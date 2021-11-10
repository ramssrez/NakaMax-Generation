package com.nakamax.service;

import com.nakamax.model.ReportesPagina;
import com.nakamax.repository.ReportesPaginaRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    public ArrayList<ReportesPagina> findAll() {
        return reportesPaginaRepository.findAll();
    }

    @Override
    public Optional<ReportesPagina> findById(Integer id) {
        return reportesPaginaRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {
        reportesPaginaRepository.deleteById(id);
    }
}
