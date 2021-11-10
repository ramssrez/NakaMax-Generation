package com.nakamax.service;

import com.nakamax.model.Color;

import java.util.ArrayList;
import java.util.Optional;

public interface ColorService {
    ArrayList <Color> findAll();
    Optional<Color> findById(Integer id);
    void saveColor (Color color);
    void deleteColor (Integer id);

}
