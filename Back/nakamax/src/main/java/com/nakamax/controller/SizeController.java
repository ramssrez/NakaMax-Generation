package com.nakamax.controller;

import com.nakamax.model.Size;
import com.nakamax.service.SizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
public class SizeController {
    private final SizeService sizeService;

    public SizeController(@Autowired SizeService sizeService) {
        this.sizeService = sizeService;
    }

    //Obtener lista
    @GetMapping("/size")
    public ArrayList<Size> getAll () {
      return sizeService.findAll();
   }

   //Obtener por ID
    @GetMapping ("/size/{id}")
    public Optional<Size> getById (@PathVariable Integer id) {
        return sizeService.findById(id);
    }

    //Guardar
    @PostMapping ("/size")
    public void saveSize (@RequestBody Size size){
        sizeService.saveSize(size);
    }

    //Borrar
    @DeleteMapping ("/size/{id}")
    public void deleteSize (@PathVariable Integer id) {
        sizeService.deleteSize(id);
    }

    //Actualizar
    @PutMapping ("/size")
    public void updateSize (@RequestBody Size size) {
        sizeService.saveSize(size);
    }
}
