package com.nakamax.controller;

import com.nakamax.model.Vendedor;
import com.nakamax.service.VendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
public class VendedorController {

    private final VendedorService vendedorService;

    public VendedorController(@Autowired VendedorService vendedorService) {
        this.vendedorService = vendedorService;
    }

    @GetMapping("/vendedores")
    public ArrayList<Vendedor> getAll(){
        return vendedorService.findAll();
    }

    @GetMapping("/vendedor/{id}")
    public Optional<Vendedor> getById(@PathVariable Integer id){
        return vendedorService.findById(id);
    }

    @PostMapping("/vendedor")
    public void save(@RequestBody Vendedor vendedor){
        vendedorService.saveVendedor(vendedor);
    }
}
