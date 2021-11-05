package com.nakamax.service;

import com.nakamax.model.Administrador;
import com.nakamax.repository.AdministradorRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AdministradorServiceImpl implements AdministradorService{
    private final AdministradorRepository administradorRepository;

    public AdministradorServiceImpl(AdministradorRepository administradorRepository) {
        this.administradorRepository = administradorRepository;
    }

    @Override
    public ArrayList<Administrador> findAll() {
        return administradorRepository.findAll();
    }
}
