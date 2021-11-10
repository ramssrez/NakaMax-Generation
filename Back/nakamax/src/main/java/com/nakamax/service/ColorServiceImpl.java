package com.nakamax.service;

import com.nakamax.model.Color;
import com.nakamax.repository.ColorRepository;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class ColorServiceImpl implements ColorService {
    private final ColorRepository colorRepository;

    public ColorServiceImpl(ColorRepository colorRepository) {
        this.colorRepository = colorRepository;
    }

    @Override
    public ArrayList<Color> findAll() {
        return colorRepository.findAll();
    }

    @Override
    public Optional<Color> findById(Integer id) {
        return colorRepository.findById(id);
    }

    @Override
    public void saveColor(Color color) {
        colorRepository.save(color);
    }

    @Override
    public void deleteColor(Integer id) {
        colorRepository.deleteById(id);
    }
}
