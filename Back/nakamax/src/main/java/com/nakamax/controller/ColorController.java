package com.nakamax.controller;

import com.nakamax.model.Color;
import com.nakamax.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;


    @RestController
public class ColorController {

        private final ColorService colorService;

        public ColorController(@Autowired ColorService colorService) {
            this.colorService = colorService;
        }

        //Obtener lista
        @GetMapping("/color")
        public ArrayList<Color> getAll () {
            return colorService.findAll();
        }

        //Obtener por ID
        @GetMapping ("/color/{id}")
        public Optional<Color> getById (@PathVariable Integer id) {
            return colorService.findById(id);
        }

        //Guardar
        @PostMapping("/color")
        public void saveColor (@RequestBody Color color){
            colorService.saveColor(color);
        }

        //Borrar
        @DeleteMapping ("/color/{id}")
        public void deleteColor (@PathVariable Integer id) {
            colorService.deleteColor(id);
        }

        //Actualizar
        @PutMapping ("/color")
        public void updateColor (@RequestBody Color color) {
            colorService.saveColor(color);
        }

}
