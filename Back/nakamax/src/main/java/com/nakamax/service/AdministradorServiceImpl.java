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

    //Método que obtienenla lista de administradores
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

    @Override
    public Administrador save(Administrador administrador) {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }

    @Override
    public ArrayList<Administrador> findByName(String name) {
        return null;
    }
}
