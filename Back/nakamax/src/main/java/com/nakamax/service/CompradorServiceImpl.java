package com.nakamax.service;


import com.nakamax.model.Comprador;
import com.nakamax.repository.CompradorRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CompradorServiceImpl implements CompradorService {
    private final CompradorRepository compradorRepository;

    public CompradorServiceImpl(CompradorRepository compradorRepository) {
        this.compradorRepository = compradorRepository;
    }

    @Override
    public ArrayList<Comprador> findAll() {
        return compradorRepository.findAll();
    }

    @Override
    public Optional<Comprador> findById(Integer id) {
        return compradorRepository.findById(id);
    }

    @Override
    public void saveComprador(Comprador comprador) {
        compradorRepository.save(comprador);
    }

    @Override
    public void delete(Integer id) {
        compradorRepository.deleteById(id);
    }
}
