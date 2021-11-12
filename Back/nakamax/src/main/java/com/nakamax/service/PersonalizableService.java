package com.nakamax.service;

import com.nakamax.model.Personalizable;

import java.util.ArrayList;

public interface PersonalizableService {

    ArrayList<Personalizable> findAll();

    Personalizable getPersonalizable( Integer id );

    Personalizable save( Personalizable personalizable);

    void delete( Integer id );
}
