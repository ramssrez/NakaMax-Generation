package com.nakamax.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "reportes_producto")
public class ReporteProducto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reporte", nullable = false)
    private Integer id;

    @Column(nullable = false)
    private String descripcion;

    @Column(name = "is_llego", nullable = true)
    private int esLlego;

    @Column(name = "is_danger", nullable = true)
    private int esDañado;

    @Column(name = "is_tardio", nullable = true)
    private int esTardio;

    @JsonIgnore
    @Column(name = "id_compra")
    private Integer compra;

    public ReporteProducto(Integer id, String descripcion, int esLlego, int esDañado, int esTardio){
        this.id = id;
        this.descripcion = descripcion;
        this.esLlego = esLlego;
        this.esDañado = esDañado;
        this.esTardio = esTardio;
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

    public int getEsLlego() {
        return esLlego;
    }

    public void setEsLlego(int esLlego) {
        this.esLlego = esLlego;
    }

    public int getEsDañado() {
        return esDañado;
    }

    public void setEsDañado(int esDañado) {
        this.esDañado = esDañado;
    }

    public int getEsTardio() {
        return esTardio;
    }

    public void setEsTardio(int esTardio) {
        this.esTardio = esTardio;
    }
}