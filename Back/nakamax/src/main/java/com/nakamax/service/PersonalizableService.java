package com.nakamax.service;

import com.nakamax.model.Material;
import com.nakamax.model.Personalizable;

import java.util.ArrayList;
import java.util.Optional;

public interface PersonalizableService {

    ArrayList<Personalizable> findAll();

    Optional<Personalizable> findById(Integer id);

    void save( Personalizable personalizable);

    void delete( Integer id );
}
