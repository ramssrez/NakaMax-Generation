package com.nakamax.repository;

import com.nakamax.model.Vendedor;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.Optional;

public interface VendedorRepository extends CrudRepository<Vendedor, Integer> {
    ArrayList<Vendedor> findAll();

    Optional<Vendedor> findById(Integer id);
}
