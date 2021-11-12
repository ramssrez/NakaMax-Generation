package com.nakamax.service;

import com.nakamax.model.Compra;

import java.util.ArrayList;
import java.util.Optional;

public interface CompraService {

    ArrayList<Compra> findAll();

    Optional<Compra> findById(Integer id );

    Compra save( Compra compra);

    void delete( Integer id );
}
