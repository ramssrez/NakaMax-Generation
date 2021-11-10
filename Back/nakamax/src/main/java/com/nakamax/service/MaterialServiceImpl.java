package com.nakamax.service;

import com.nakamax.model.Material;
import com.nakamax.repository.MaterialRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class MaterialServiceImpl implements MaterialService {
    private final MaterialRepository materialRepository;

    public MaterialServiceImpl (MaterialRepository materialRepository) {
        this.materialRepository = materialRepository; }


    @Override
    public ArrayList<Material> findAll() {
        return materialRepository.findAll();
    }

    @Override
    public Optional<Material> findById(Integer id) {
        return materialRepository.findById(id);
    }

    @Override
    public void saveMaterial(Material material) {
        materialRepository.save (material);
    }

    @Override
    public void deleteMaterial(Integer id) {
        materialRepository.deleteById(id);
    }
}
