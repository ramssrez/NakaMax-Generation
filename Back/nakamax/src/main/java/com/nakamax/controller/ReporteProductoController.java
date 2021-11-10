package com.nakamax.controller;

import com.nakamax.model.ReporteProducto;
import com.nakamax.service.ReporteProductoService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/reporte/producto")
public class ReporteProductoController {
    private final ReporteProductoService reporteProductoService;

    public ReporteProductoController(ReporteProductoService reporteProductoService) {
        this.reporteProductoService = reporteProductoService;
    }
/*
    @PostMapping("/reporte")
    public ReporteProducto nuevo(@RequestBody ReporteProducto reporteProducto){
        return reporteProductoService.save(reporteProducto);
    }

    @GetMapping( "/reporte" )
    public String saludo() {
        return "Hola desde producto";
    }*/
}
