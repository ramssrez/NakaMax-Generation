package com.nakamax.controller;

import com.nakamax.model.Categoria;
import com.nakamax.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;


@RestController
@RequestMapping("api/categorias")
public class CategoriaController {
        private final CategoriaService categoriaService;

        public CategoriaController(@Autowired CategoriaService categoriaService) {
            this.categoriaService = categoriaService;
        }

        //Obtener lista
        @GetMapping("/todas")
        public ArrayList<Categoria> getAll () {
            return categoriaService.findAll();
        }

        //Obtener por ID
        @GetMapping ("/{id}")
        public Optional<Categoria> getById (@PathVariable Integer id) {
            return categoriaService.findById(id);
        }

        //Guardar
        @PostMapping("/crea")
        public void saveCategoria (@RequestBody Categoria categoria){
            categoriaService.saveCategoria(categoria);
        }

        //Borrar
        @DeleteMapping ("/borra-categoria/{id}")
        public void deleteCategoria (@PathVariable Integer id) {
            categoriaService.deleteCategoria(id);
        }

        //Actualizar
        @PutMapping ("/actualiza")
        public void updateCategoria (@RequestBody Categoria categoria) {
            categoriaService.saveCategoria(categoria);
        }
    }

