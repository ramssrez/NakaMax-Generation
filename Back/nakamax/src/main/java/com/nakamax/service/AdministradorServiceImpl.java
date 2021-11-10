package com.nakamax.service;

import com.nakamax.model.Administrador;
import com.nakamax.repository.AdministradorRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class AdministradorServiceImpl implements AdministradorService{
    private final AdministradorRepository administradorRepository;

    public AdministradorServiceImpl(AdministradorRepository administradorRepository) {
        this.administradorRepository = administradorRepository;
    }

    //Método que obtienen la lista de administradores
    @Override
    public ArrayList<Administrador> findAll() {
        return administradorRepository.findAll();
    }

    //Método que retorna un administrador por id
    @Override
    public Administrador getAdministrador(Integer id) {
        Optional<Administrador> administrador = administradorRepository.findById(id);
        return administrador.orElse(null);
    }

    //Método que guarda un nuevo administrador
    @Override
    public Administrador save(Administrador administrador) {
        return administradorRepository.save(administrador);
    }

    //Método que elimina a un administrador por medio del id
    @Override
    public void delete(Integer id) {
        administradorRepository.deleteById(id);
    }

}
