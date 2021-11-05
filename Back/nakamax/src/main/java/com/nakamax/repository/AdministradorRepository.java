package com.nakamax.repository;

import com.nakamax.model.Administrador;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface AdministradorRepository extends CrudRepository<Administrador, Integer> {
    ArrayList<Administrador> findAll();
}
