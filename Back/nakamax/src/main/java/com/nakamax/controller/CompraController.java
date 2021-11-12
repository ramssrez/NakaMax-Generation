package com.nakamax.controller;

import com.nakamax.model.Compra;
import com.nakamax.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("api/compras")
public class CompraController {

    private final CompraService compraService;

    public CompraController(@Autowired CompraService compraService) {
        this.compraService = compraService;
    }

    @GetMapping("/todos")
    public ArrayList<Compra> getAll(){
        return compraService.findAll();
    }

    @GetMapping("/compra/{id}")
    public Optional<Compra> getById(@PathVariable Integer id){
        return compraService.findById(id);
    }

    @PostMapping("/crea")
    public Compra save(@RequestBody Compra compra){
        return compraService.save(compra);
    }

    @PutMapping("/actualiza")
    public Compra update(@RequestBody Compra compra)
    {
        return compraService.save(compra);
    }

    @DeleteMapping("/borra-compra/{id}")
    public void delete(@PathVariable Integer id)
    {
        compraService.delete(id);
    }
}
