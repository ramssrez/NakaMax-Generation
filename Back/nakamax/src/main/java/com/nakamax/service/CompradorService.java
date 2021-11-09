package com.nakamax.service;

import com.nakamax.model.Comprador;

import java.util.ArrayList;
import java.util.Optional;

public interface CompradorService {
    ArrayList<Comprador> findAll();

    Optional<Comprador> findById(Integer id);

    void saveComprador(Comprador comprador);

    void delete(Integer id);
}
