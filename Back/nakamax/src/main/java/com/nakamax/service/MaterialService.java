package com.nakamax.service;

import com.nakamax.model.Material;

import java.util.ArrayList;
import java.util.Optional;

public interface MaterialService {
    ArrayList <Material> findAll();
    Optional<Material> findById(Integer id);
    void saveMaterial (Material material);
    void deleteMaterial (Integer id);
}
