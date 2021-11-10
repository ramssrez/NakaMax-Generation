package com.nakamax.service;

import com.nakamax.model.Producto;

import java.util.ArrayList;
import java.util.Optional;

public interface ProductoService {
    ArrayList <Producto> findAll();
    Optional <Producto> findById (Integer id);
    void saveProducto (Producto producto);
    void deleteProducto(Integer id);
}
