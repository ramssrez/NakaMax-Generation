package com.nakamax.repository;

import com.nakamax.model.Material;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface MaterialRepository extends CrudRepository <Material, Integer> {
    ArrayList <Material> findAll();
}
