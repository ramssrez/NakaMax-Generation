package com.nakamax.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity (name="productos")

public class Producto {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id_producto;

    private String nombre;

    private float costo;

    private String descripcion;

    private String imagen;

    private Integer stock;

    private Integer personalizable;

    private Integer id_vendedor;

    private Integer id_personalizable;

    public Producto(Integer id_producto, String nombre, float costo, String descripcion, String imagen, Integer stock, Integer personalizable, Integer id_vendedor, Integer id_personalizable) {
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.costo = costo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.stock = stock;
        this.personalizable = personalizable;
        this.id_vendedor = id_vendedor;
        this.id_personalizable = id_personalizable;
    }

    public Producto() {

    }

    public Integer getId_producto() {
        return id_producto;
    }

    public void setId_producto(Integer id_producto) {
        this.id_producto = id_producto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public float getCosto() {
        return costo;
    }

    public void setCosto(float costo) {
        this.costo = costo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Integer getPersonalizable() {
        return personalizable;
    }

    public void setPersonalizable(Integer personalizable) {
        this.personalizable = personalizable;
    }

    public Integer getId_vendedor() {
        return id_vendedor;
    }

    public void setId_vendedor(Integer id_vendedor) {
        this.id_vendedor = id_vendedor;
    }

    public Integer getId_personalizable() {
        return id_personalizable;
    }

    public void setId_personalizable(Integer id_personalizable) {
        this.id_personalizable = id_personalizable;
    }
}
