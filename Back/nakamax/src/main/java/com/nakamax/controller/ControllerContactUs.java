package com.nakamax.controller;

import com.nakamax.model.ContactUs;
import com.nakamax.model.Vendedor;
import com.nakamax.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("api/comentarios")
public class ControllerContactUs {
    private final ContactUsService contactUsService;

    public ControllerContactUs(@Autowired ContactUsService contactUsService) {
        this.contactUsService = contactUsService;
    }

    //Obtiene los comentarios de los usuarios
    @GetMapping("/todos")
    public ArrayList<ContactUs> getAll(){
        return contactUsService.findAll();
    }

    //Obtienen los comentarios por id
    @GetMapping("/comentario/{id}")
    public Optional<ContactUs> getById(@PathVariable Integer id){
        return contactUsService.findById(id);
    }

    @PostMapping("/crea")
    public void save(@RequestBody ContactUs contactUs){
        contactUsService.saveContactUs(contactUs);
    }

    @PutMapping("/actualiza")
    public void update(@RequestBody ContactUs contactUs)
    {
        contactUsService.saveContactUs(contactUs);
    }

    @DeleteMapping("/borra-comentario/{id}")
    public void delete(@PathVariable Integer id)
    {
        contactUsService.delete(id);
    }
}
