package com.nakamax.controller;

import com.nakamax.model.Vendedor;
import com.nakamax.repository.VendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Optional;

@RestController
public class VendedorController {

    private final VendedorRepository vendedorRepository;

    public VendedorController(@Autowired VendedorRepository vendedorRepository) {
        this.vendedorRepository = vendedorRepository;
    }

    @GetMapping("/Vendedores")
    public ArrayList<Vendedor> getAll(){
        return vendedorRepository.findAll();
    }

    @GetMapping("/Vendedor/{id}")
    public Optional<Vendedor> getById(@PathVariable Integer id){
        return vendedorRepository.findById(id);
    }
}
