package com.nakamax.repository;

import com.nakamax.model.Color;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface ColorRepository extends CrudRepository <Color, Integer> {
    ArrayList <Color> findAll();
}
