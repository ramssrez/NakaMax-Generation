package com.nakamax.service;

import com.nakamax.model.Personalizable;
import com.nakamax.repository.PersonalizableRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class PersonalizableServiceImpl  implements PersonalizableService{
    private final PersonalizableRepository personalizableRepository;

    public PersonalizableServiceImpl(PersonalizableRepository personalizableRepository) {
        this.personalizableRepository = personalizableRepository;
    }


    @Override
    public ArrayList<Personalizable> findAll() {
        return personalizableRepository.findAll();
    }

    @Override
    public Optional<Personalizable> findById(Integer id) {
        return personalizableRepository.findById(id);
    }


    @Override
    public void save(Personalizable personalizable) {
         personalizableRepository.save(personalizable);
    }

    @Override
    public void delete(Integer id) {
        personalizableRepository.deleteById(id);
    }
}
