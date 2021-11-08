package com.nakamax.service;

import com.nakamax.model.Vendedor;

import java.util.ArrayList;
import java.util.Optional;

public interface VendedorService {
    ArrayList<Vendedor> findAll();

    Optional<Vendedor> findById(Integer id);

    void saveVendedor(Vendedor vendedor);

    void delete(Integer id);
}
