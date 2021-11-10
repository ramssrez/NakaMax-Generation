package com.nakamax.service;

import com.nakamax.model.Size;
import com.nakamax.repository.SizeRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class SizeServiceImpl implements SizeService {
    private final SizeRepository sizeRepository;

    public SizeServiceImpl(SizeRepository sizeRepository) {
        this.sizeRepository = sizeRepository;
    }

    @Override
    public ArrayList<Size> findAll() {
        return sizeRepository.findAll();
    }

    public Optional<Size> findById(Integer id) {
        return sizeRepository.findById(id);
    }

    public void saveSize (Size size) {
        sizeRepository.save(size);
    }

    public void deleteSize (Integer id) {
        sizeRepository.deleteById(id);
    }
}
