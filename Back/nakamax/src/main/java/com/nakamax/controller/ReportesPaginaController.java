package com.nakamax.controller;

import com.nakamax.model.ReportesPagina;
import com.nakamax.service.ReportesPaginaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("api/reporte/pagina")
public class ReportesPaginaController {
    private final  ReportesPaginaService reportesPaginaService;

    public ReportesPaginaController(@Autowired ReportesPaginaService reportesPaginaService) {
        this.reportesPaginaService = reportesPaginaService;
    }

    @PostMapping("/crea")
    public ReportesPagina reportesPagina(@RequestBody ReportesPagina reportesPagina){
        return reportesPaginaService.save(reportesPagina);
    }

    @GetMapping("/todos")
    public ArrayList<ReportesPagina> reportes(){
        return reportesPaginaService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<ReportesPagina> findReporte(@PathVariable Integer id){
        return reportesPaginaService.findById(id);
    }

    @DeleteMapping("borra/{id}")
    public String delete(@PathVariable Integer id){
        reportesPaginaService.delete(id);
        return "Borrado";
    }

    @GetMapping( "/hola" )
    public String saludo() {
        return "Hola desde reportes de pagina";
    }
}
