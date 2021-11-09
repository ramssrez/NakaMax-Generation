package com.nakamax.controller;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


public class TamaniosController {



    @RestController
    public class TamaniosController {

        private final TamaniosService tamaniosService;

        public TamaniosController(@Autowired TamaniosService tamaniosService) {
            this.tamaniosService = tamaniosService;
        }

        @GetMapping("/tamanios")
        public ArrayList<Tamanios> getAll(){
            return tamaniosService.findAll();
        }


        @PostMapping("/tamanios")
        public void save(@RequestBody Tamanios tamanios){
            tamaniosService.saveTamanios(tamanios);
        }

        @PutMapping("/tamanios")
        public void update(@RequestBody Tamanios tamanios)
        {
            tamaniosService.saveTamanios(tamanios);
        }

        @DeleteMapping("/tamanios/{id}")
        public void delete(@PathVariable Integer id)
        {
            tamaniosService.delete(id);
        }
    }
}
