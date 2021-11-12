package com.nakamax.model;

import javax.persistence.*;
import java.util.List;

@Entity(name = "reportes_pagina")
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

    @ManyToMany(mappedBy = "reportes_pagina")
    private List<Vendedor> vendedores;

    @ManyToMany(mappedBy = "reportes_pagina")
    private List<Comprador> compradores;

    @ManyToMany(mappedBy = "reportes_pagina")
    private List<Administrador> administradores;

    public ReportesPagina(){
    }

    public ReportesPagina(Integer id, String descripcion, int esGeneral, int esLinkCaido){
        this.id = id;
        this.descripcion = descripcion;
        this.esGeneral = esGeneral;
        this.esLinkCaido = esLinkCaido;
    }

    public ReportesPagina(Integer id, String descripcion, int esGeneral, int esLinkCaido, List<Vendedor> vendedores) {
        this.id = id;
        this.descripcion = descripcion;
        this.esGeneral = esGeneral;
        this.esLinkCaido = esLinkCaido;
        this.vendedores = vendedores;
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

    public List<Vendedor> getVendedores() {
        return vendedores;
    }

    public void setVendedores(List<Vendedor> vendedores) {
        this.vendedores = vendedores;
    }

    public List<Comprador> getCompradores() {
        return compradores;
    }

    public void setCompradores(List<Comprador> compradores) {
        this.compradores = compradores;
    }

    public List<Administrador> getAdministradores() {
        return administradores;
    }

    public void setAdministradores(List<Administrador> administradores) {
        this.administradores = administradores;
    }
}
