package com.nakamax.service;

import com.nakamax.model.Categoria;

import java.util.ArrayList;
import java.util.Optional;

public interface CategoriaService {
    ArrayList <Categoria> findAll();
    Optional<Categoria> findById(Integer id);
    void saveCategoria (Categoria categoria);
    void deleteCategoria (Integer id);
}
