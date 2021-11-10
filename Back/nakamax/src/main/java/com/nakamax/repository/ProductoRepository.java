package com.nakamax.repository;

import com.nakamax.model.Producto;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface ProductoRepository extends CrudRepository <Producto, Integer> {
    ArrayList <Producto> findAll();
}
