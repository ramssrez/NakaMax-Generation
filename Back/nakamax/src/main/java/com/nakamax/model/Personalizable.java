package com.nakamax.model;

import javax.persistence.*;
import java.util.List;

@Entity(name = "personalizables")
public class Personalizable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_personalizable;
    private Float costo_extra;
    private String descripcion;

    @OneToMany(mappedBy = "personalizables")
    private List<Producto> productos;

    @ManyToOne
    private Color colores;

    @ManyToOne
    private Material materiales;

    @ManyToOne
    private Size sizes;

    public Integer getId_personalizable() {
        return id_personalizable;
    }

    public void setId_personalizable(Integer id_personalizable) {
        this.id_personalizable = id_personalizable;
    }

    public Float getCosto_extra() {
        return costo_extra;
    }

    public void setCosto_extra(Float costo_extra) {
        this.costo_extra = costo_extra;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }

    public Color getColores() {
        return colores;
    }

    public void setColores(Color colores) {
        this.colores = colores;
    }

    public Material getMateriales() {
        return materiales;
    }

    public void setMateriales(Material materiales) {
        this.materiales = materiales;
    }

    public Size getSizes() {
        return sizes;
    }

    public void setSizes(Size sizes) {
        this.sizes = sizes;
    }
}
