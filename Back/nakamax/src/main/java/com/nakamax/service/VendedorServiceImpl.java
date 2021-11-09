package com.nakamax.service;

import com.nakamax.model.Vendedor;
import com.nakamax.repository.VendedorRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class VendedorServiceImpl implements VendedorService {

    private final VendedorRepository vendedorRepository;

    public VendedorServiceImpl(VendedorRepository vendedorRepository) {
        this.vendedorRepository = vendedorRepository;
    }

    @Override
    public ArrayList<Vendedor> findAll() {
        return vendedorRepository.findAll();
    }

    @Override
    public Optional<Vendedor> findById(Integer id) {
        return vendedorRepository.findById(id);
    }

    @Override
    public void saveVendedor(Vendedor vendedor) {
        vendedorRepository.save(vendedor);
    }

    @Override
    public void delete(Integer id) {
        vendedorRepository.deleteById(id);
    }
}
