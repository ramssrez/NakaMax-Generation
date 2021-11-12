package com.nakamax.repository;

import com.nakamax.model.Compra;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface CompraRepository extends CrudRepository <Compra, Integer> {
    ArrayList<Compra> findAll();
}