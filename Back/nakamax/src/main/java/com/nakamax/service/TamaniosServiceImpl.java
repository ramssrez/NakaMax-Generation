package com.nakamax.service;

import com.nakamax.model.Tamanios;
import com.nakamax.repository.TamaniosRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class TamaniosServiceImpl implements TamaniosService {

    private final TamaniosRepository tamaniosRepository;

    public TamaniosServiceImpl(TamaniosRepository tamaniosRepository) {
        this.tamaniosRepository = tamaniosRepository;
    }

    @Override
    public ArrayList<Tamanios> findAll() {
        return tamaniosRepository.findAll();
    }

    @Override
    public Optional<Tamanios> findById(Integer id) {
        return tamaniosRepository.findById(id);
    }

    @Override
    public void saveTamanios(Tamanios tamanios) {
        tamaniosRepository.save(tamanios);
    }

    @Override
    public void delete(Integer id) {
        tamaniosRepository.deleteById(id);
    }
}