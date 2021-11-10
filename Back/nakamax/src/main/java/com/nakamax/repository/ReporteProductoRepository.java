package com.nakamax.repository;

import com.nakamax.model.ReporteProducto;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReporteProductoRepository extends CrudRepository<ReporteProducto, Integer> {
}
