package com.nakamax.controller;

import com.nakamax.model.Administrador;
import com.nakamax.model.Comprador;
import com.nakamax.service.AdministradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("api/usuarios/administrador")
public class AdministradorController {
    private final AdministradorService administradorService;

    //Constructor de la clase e inyección de dependencias
    public AdministradorController(@Autowired AdministradorService administradorService) {
        this.administradorService = administradorService;
    }

    //Implementación del método que muestra los administradores
    @GetMapping( "/todos" )
    public ArrayList<Administrador> getAdministradores() {
        return administradorService.findAll();
    }

    //Implementación de la ruta que obtiene los datos de usuario
    @GetMapping("/{id}")
    public Administrador getAdministrador(@PathVariable Integer id){
        return administradorService.getAdministrador(id);
    }

    //Implementación de la ruta para que se cree un nuevo administrador
    @PostMapping("/crea")
    public Administrador save(@RequestBody Administrador administrador){
        return administradorService.save(administrador);
    }

    //Implementación de la ruta para que se elimine un administrador de la base de datos
    @DeleteMapping("/borra-admin/{id}")
    public void delete(@PathVariable Integer id) {
        administradorService.delete(id);
    }

    @PutMapping("/actualiza")
    public void update(@RequestBody Administrador administrador) {
        administradorService.save(administrador);
    }
    //spring.datasource.url=jdbc:mysql://sql337.main-hosting.eu:3306/u612037068_kiss?enabledTLSProtocols=TLSv1.2
}
