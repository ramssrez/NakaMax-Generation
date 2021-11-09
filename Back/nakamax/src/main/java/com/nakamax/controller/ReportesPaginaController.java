package com.nakamax.controller;

import com.nakamax.model.ReportesPagina;
import com.nakamax.service.ReportesPaginaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("api/reporte/pagina")
public class ReportesPaginaController {
    private final  ReportesPaginaService reportesPaginaService;

    public ReportesPaginaController(@Autowired ReportesPaginaService reportesPaginaService) {
        this.reportesPaginaService = reportesPaginaService;
    }

    @PostMapping("/nuevo")
    public ReportesPagina reportesPagina(@RequestBody ReportesPagina reportesPagina){
        return reportesPaginaService.save(reportesPagina);
    }

    @GetMapping("/reportes")
    public ArrayList<ReportesPagina> reportes(){
        return reportesPaginaService.findAll();
    }

    /*@GetMapping("/{id}")
    public ReportesPagina getReporte(@PathVariable Integer id){
        return reportesPaginaService.findById(id);
    }*/

    @GetMapping( "/reporte" )
    public String saludo() {
        return "Hola";
    }
}
