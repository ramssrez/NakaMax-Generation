package com.nakamax.model;

import javax.persistence.*;

@Entity
@Table(name = "reportes_pagina")
public class ReportesPagina {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reporte_pag", nullable = false)
    private Integer id;

    @Column(nullable = false)
    private String descripcion;

    @Column(name = "is_general", nullable = true)
    private int esGeneral;

    @Column(name = "is_link_down", nullable = true)
    private int esLinkCaido;

    public ReportesPagina(Integer id, String descripcion, int esGeneral, int esLinkCaido){
        this.id = id;
        this.descripcion = descripcion;
        this.esGeneral = esGeneral;
        this.esLinkCaido = esLinkCaido;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getEsGeneral() {
        return esGeneral;
    }

    public void setEsGeneral(int esGeneral) {
        this.esGeneral = esGeneral;
    }

    public int getEsLinkCaido() {
        return esLinkCaido;
    }

    public void setEsLinkCaido(int esLinkCaido) {
        this.esLinkCaido = esLinkCaido;
    }
}
