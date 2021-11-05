package com.nakamax.controller;

import com.nakamax.model.Administrador;
import com.nakamax.service.AdministradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@CrossOrigin( "*" )
@RestController
public class AdministradorController {
    private final AdministradorService administradorService;

    public AdministradorController(@Autowired AdministradorService administradorService) {
        this.administradorService = administradorService;
    }
    @GetMapping( "/admins" )
    public ArrayList<Administrador> getAdministradores() {
        return administradorService.findAll();
    }

    @GetMapping( "/user" )
    public String saludo() {
        return "Hola";
    }
}
