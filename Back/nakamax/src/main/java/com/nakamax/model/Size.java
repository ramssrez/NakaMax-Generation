package com.nakamax.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity (name = "sizes")


public class Size {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id_size;

    private String size;

    private float precio;

    public Size(Integer id_size, String size, float precio) {
        this.id_size = id_size;
        this.size = size;
        this.precio = precio;
    }

    public Size () {

    }

    public Integer getId_size() {
        return id_size;
    }

    public void setId_size(Integer id_size) {
        this.id_size = id_size;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }
}
