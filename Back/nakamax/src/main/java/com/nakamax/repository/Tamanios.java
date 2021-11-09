package com.nakamax.repository;

import com.nakamax.model.Tamanios;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface TamaniosRepository extends CrudRepository<Tamanios, Integer> {
    ArrayList<Tamanios> findAll();

    Optional<Tamanios> findById(Integer id);
}