package com.nakamax.service;

import com.nakamax.model.Size;

import java.util.ArrayList;
import java.util.Optional;

public interface SizeService {
    ArrayList <Size> findAll();
    Optional<Size> findById (Integer id);
    void saveSize (Size size);
    void deleteSize (Integer id);

}
