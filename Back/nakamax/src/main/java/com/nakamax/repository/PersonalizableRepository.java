package com.nakamax.repository;

import com.nakamax.model.Personalizable;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface PersonalizableRepository extends CrudRepository<Personalizable, Integer> {
    ArrayList<Personalizable> findAll();
}
