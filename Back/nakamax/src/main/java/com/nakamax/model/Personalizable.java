package com.nakamax.model;

import javax.persistence.*;

@Entity(name = "personalizables")
public class Personalizable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_personalizable;
    private Float costo_extra;
    private String descripcion;
    private Integer id_color;
    private Integer id_material;
    private Integer id_size;


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

    public Integer getId_color() {
        return id_color;
    }

    public void setId_color(Integer id_color) {
        this.id_color = id_color;
    }

    public Integer getId_material() {
        return id_material;
    }

    public void setId_material(Integer id_material) {
        this.id_material = id_material;
    }

    public Integer getId_size() {
        return id_size;
    }

    public void setId_size(Integer id_size) {
        this.id_size = id_size;
    }
}
