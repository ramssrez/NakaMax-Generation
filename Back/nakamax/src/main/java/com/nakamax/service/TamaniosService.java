package com.nakamax.service;

import com.nakamax.model.Tamanios;

import java.util.ArrayList;
import java.util.Optional;

public interface TamaniosService {
    ArrayList<Tamanios> findAll();

    Optional<Tamanios> findById(Integer id);

    void saveTamanios(Tamanios tamanios);

    void delete(Integer id);
}