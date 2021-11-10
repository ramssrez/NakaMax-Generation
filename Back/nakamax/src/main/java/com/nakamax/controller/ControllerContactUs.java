package com.nakamax.controller;

import com.nakamax.model.ContactUs;
import com.nakamax.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class ControllerContactUs {
    private final ContactUsService contactUsService;

    public ControllerContactUs(@Autowired ContactUsService contactUsService) {
        this.contactUsService = contactUsService;
    }

    @GetMapping("/comentarios")
    public ArrayList<ContactUs> getAll(){
        return contactUsService.findAll();
    }
}
