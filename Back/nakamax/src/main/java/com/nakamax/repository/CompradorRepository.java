package com.nakamax.repository;

import com.nakamax.model.Comprador;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.Optional;

public interface CompradorRepository extends CrudRepository<Comprador, Integer> {
    ArrayList<Comprador> findAll();

    Optional<Comprador> findById(Integer id);
}
