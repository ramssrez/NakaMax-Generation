package com.nakamax.model;

import javax.persistence.*;
import java.util.List;


@Entity (name="materiales")


public class Material {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)

    private Integer id_material;

    private String material;

    private float precio;

    @OneToMany(mappedBy = "materiales")
    private List<Personalizable> personalizables;

    public Material(Integer id_material, String material, float precio) {
        this.id_material = id_material;
        this.material = material;
        this.precio = precio;
    }

    public Material () {
    }

    public Integer getId_material() {
        return id_material;
    }

    public void setId_material(Integer id_material) {
        this.id_material = id_material;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
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
