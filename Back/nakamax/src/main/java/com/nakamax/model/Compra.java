package com.nakamax.model;

import javax.persistence.*;
import java.util.List;


@Entity(name = "compras")
public class Compra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_compra;

    private String fecha_compra;

    @ManyToOne
    private Comprador compradores;

    @OneToOne
    private ReporteProducto reportes_producto;

    public Compra() {
    }

    public Integer getId_compra() {
        return id_compra;
    }

    public void setId_compra(Integer id_compra) {
        this.id_compra = id_compra;
    }

    public String getFecha_compra() {
        return fecha_compra;
    }

    public void setFecha_compra(String fecha_compra) {
        this.fecha_compra = fecha_compra;
    }

    public Comprador getCompradores() {
        return compradores;
    }

    public void setCompradores(Comprador compradores) {
        this.compradores = compradores;
    }

    public ReporteProducto getReportes_producto() {
        return reportes_producto;
    }

    public void setReportes_producto(ReporteProducto reportes_producto) {
        this.reportes_producto = reportes_producto;
    }
}
