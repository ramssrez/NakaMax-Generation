package com.nakamax.model;

import javax.persistence.*;
import java.util.List;

@Entity (name="colores")


public class Color {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id_color;

    private String color;

    private float precio;

    @OneToMany(mappedBy = "colores")
    private List<Personalizable> personalizables;

    public Color(Integer id_color, String color, float precio) {
        this.id_color = id_color;
        this.color = color;
        this.precio = precio;
    }

    public Color () {
    }

    public Integer getId_color() {
        return id_color;
    }

    public void setId_color(Integer id_color) {
        this.id_color = id_color;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public List<Personalizable> getPersonalizables() {
        return personalizables;
    }

    public void setPersonalizables(List<Personalizable> personalizables) {
        this.personalizables = personalizables;
    }
}
