package com.nakamax.controller;

import com.nakamax.model.Size;
import com.nakamax.service.SizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

public class SizeController {

    private final SizeService sizeService;

    public SizeController(@Autowired SizeService sizeService) this.sizeService = sizeService;
        @GetMapping ("/size")
    public ArrayList <Size> getAll ();



}
