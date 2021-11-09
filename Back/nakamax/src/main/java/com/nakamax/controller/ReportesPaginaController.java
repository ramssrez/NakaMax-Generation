package com.nakamax.controller;

import com.nakamax.model.ReportesPagina;
import com.nakamax.service.ReportesPaginaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/reportes/pagina")
public class ReportesPaginaController {
    private final  ReportesPaginaService reportesPaginaService;

    public ReportesPaginaController(@Autowired ReportesPaginaService reportesPaginaService) {
        this.reportesPaginaService = reportesPaginaService;
    }

    @PostMapping("/nuevo/reporte")
    public ReportesPagina reportesPagina(@RequestBody ReportesPagina reportesPagina){
        return reportesPaginaService.save(reportesPagina);
    }

    @GetMapping("/reportes")
    public List<ReportesPagina> reportes(){
        return reportesPaginaService.getReportes();
    }

    @GetMapping( "/reporte" )
    public String saludo() {
        return "Hola";
    }
}
