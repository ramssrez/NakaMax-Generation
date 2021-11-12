package com.nakamax.controller;


import com.nakamax.model.Comprador;
import com.nakamax.service.CompradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("api/usuarios/compradores")
public class CompradorController {
    private final CompradorService compradorService;

    public CompradorController(@Autowired CompradorService compradorService) {
        this.compradorService = compradorService;
    }
    @GetMapping("/todos")
    public ArrayList<Comprador> getAll(){
        return compradorService.findAll();
    }
    @GetMapping("/comprador/{id}")
    public Optional<Comprador> getById(@PathVariable Integer id){
        return compradorService.findById(id);
    }
    @PostMapping("/crea")
    public void save(@RequestBody Comprador comprador){
        compradorService.saveComprador(comprador);
    }

    @PutMapping("/actualiza")
    public void update(@RequestBody Comprador comprador)
    {
        compradorService.saveComprador(comprador);
    }

    @DeleteMapping("/borra-comprador/{id}")
    public void delete(@PathVariable Integer id)
    {
        compradorService.delete(id);
    }
}
