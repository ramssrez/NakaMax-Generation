package com.nakamax.controller;

import com.nakamax.model.Material;
import com.nakamax.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;


@RestController
public class MaterialController {
        private final MaterialService materialService;

        public MaterialController(@Autowired MaterialService materialService) {
            this.materialService = materialService;
        }

        //Obtener lista
        @GetMapping("/material")
        public ArrayList<Material> getAll () {
            return materialService.findAll();
        }

        //Obtener por ID
        @GetMapping ("/material/{id}")
        public Optional<Material> getById (@PathVariable Integer id) {
            return materialService.findById(id);
        }

        //Guardar
        @PostMapping("/material")
        public void saveMaterial (@RequestBody Material material){
            materialService.saveMaterial(material);
        }

        //Borrar
        @DeleteMapping ("/material/{id}")
        public void deleteMaterial (@PathVariable Integer id) {
            materialService.deleteMaterial(id);
        }

        //Actualizar
        @PutMapping ("/material")
        public void updateMaterial (@RequestBody Material material) {
            materialService.saveMaterial(material);
        }
    }

