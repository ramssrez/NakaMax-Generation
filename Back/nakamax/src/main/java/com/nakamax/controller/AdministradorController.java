package com.nakamax.controller;

import com.nakamax.model.Administrador;
import com.nakamax.service.AdministradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin( "*" )
@RestController
public class AdministradorController {
    private final AdministradorService administradorService;

    //Constructor de la clase e inyección de dependencias
    public AdministradorController(@Autowired AdministradorService administradorService) {
        this.administradorService = administradorService;
    }

    //Implementación del método que muestra los administradores
    @GetMapping( "/admins" )
    public ArrayList<Administrador> getAdministradores() {
        return administradorService.findAll();
    }

    //Implementación de la ruta que obtiene los datos de usuario
    @GetMapping("/admin/{id}")
    public Administrador getAdministrador(@PathVariable Integer id){
        return administradorService.getAdministrador(id);
    }

    //Implementación de la ruta para que se cree un nuevo administrador
    @PostMapping("/admin")
    public Administrador save(@RequestBody Administrador administrador){
        return administradorService.save(administrador);
    }

    @GetMapping( "/user" )
    public String saludo() {
        return "Hola";
    }
}
