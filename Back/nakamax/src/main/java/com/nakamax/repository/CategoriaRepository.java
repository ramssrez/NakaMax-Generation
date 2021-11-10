package com.nakamax.repository;

import com.nakamax.model.Categoria;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface CategoriaRepository extends CrudRepository <Categoria, Integer> {
    ArrayList <Categoria> findAll();
}
