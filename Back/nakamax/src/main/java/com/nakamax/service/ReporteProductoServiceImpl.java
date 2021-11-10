package com.nakamax.service;

import com.nakamax.model.ReporteProducto;
import com.nakamax.repository.ReporteProductoRepository;
import org.springframework.stereotype.Service;

@Service
public class ReporteProductoServiceImpl implements ReporteProductoService{
    private final ReporteProductoRepository reporteProductoRepository;

    public ReporteProductoServiceImpl(ReporteProductoRepository reporteProductoRepository) {
        this.reporteProductoRepository = reporteProductoRepository;
    }

    @Override
    public ReporteProducto save(ReporteProducto reporteProducto) {
        return reporteProductoRepository.save(reporteProducto);
    }
}
