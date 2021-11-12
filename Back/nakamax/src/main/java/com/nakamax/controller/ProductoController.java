package com.nakamax.controller;

import com.nakamax.model.Producto;
import com.nakamax.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("api/productos")
public class ProductoController {
    private final ProductoService productoService;

    public ProductoController(@Autowired ProductoService productoService) {
        this.productoService = productoService;
    }
    @GetMapping ("/todos")
    public ArrayList <Producto> getAll() {
        return productoService.findAll();
    }

}
