package com.nakamax.model;

import javax.persistence.*;

@Entity(name = "tamanios")
public class Tamanios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_producto;

    private String tamanios;

    @Column (name = "tamanios")

    public Tamanios(Integer id_producto) {
        this.id_producto = id_producto;
        this.grande = grande;
        this.mediano = mediano;
        this.chico = chico;
    }

    public Integer getId_producto() {
        return id_producto;
    }

    public void setId_producto(Integer id_producto) {
        this.id_producto = id_producto;
    }

}
