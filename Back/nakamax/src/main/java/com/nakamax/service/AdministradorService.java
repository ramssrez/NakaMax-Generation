package com.nakamax.service;

import com.nakamax.model.Administrador;

import java.util.ArrayList;

public interface AdministradorService {

    ArrayList<Administrador> findAll();

    Administrador getAdministrador( Integer id );

    Administrador save( Administrador administrador);

    void delete( Integer id );
}
