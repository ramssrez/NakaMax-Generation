package com.nakamax.repository;

import com.nakamax.model.Size;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface SizeRepository extends CrudRepository <Size, Integer> {
    ArrayList <Size> findAll();
}
