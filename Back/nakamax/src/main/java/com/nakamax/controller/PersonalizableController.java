package com.nakamax.controller;

import com.nakamax.model.Personalizable;
import com.nakamax.model.Vendedor;
import com.nakamax.service.PersonalizableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("api/personalizable")
public class PersonalizableController{
    private final PersonalizableService personalizableService;

    public PersonalizableController(@Autowired PersonalizableService personalizableService) {
        this.personalizableService = personalizableService;
    }

    @GetMapping("/todos")
    public ArrayList<Personalizable> getAll(){
        return personalizableService.findAll();
    }

    @GetMapping("/buscar/{id}")
    public Optional<Personalizable> getById(@PathVariable Integer id){
        return personalizableService.findById(id);
    }

    @PostMapping("/crea")
    public void save(@RequestBody Personalizable personalizable){
        personalizableService.save(personalizable);
    }

    @PutMapping("/actualiza")
    public void update(@RequestBody Personalizable personalizable)
    {
        personalizableService.save(personalizable);
    }

    @DeleteMapping("/borra/{id}")
    public void delete(@PathVariable Integer id)
    {
        personalizableService.delete(id);
    }
}
