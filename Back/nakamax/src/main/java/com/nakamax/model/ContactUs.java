package com.nakamax.model;

import javax.persistence.*;

@Entity(name = "comentarios_contac_us")
public class ContactUs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_comentario")
    private Integer idComentario;
    private String nombre;
    private String correo;
    @Column(name = "telefono")
    private String phone;
    private String comentario;

    public ContactUs() {

    }

    public ContactUs(Integer idComentario, String nombre, String correo, String phone, String comentario) {
        this.idComentario = idComentario;
        this.nombre = nombre;
        this.correo = correo;
        this.phone = phone;
        this.comentario = comentario;
    }

    public Integer getIdComentario() {
        return idComentario;
    }

    public void setIdComentario(Integer idComentario) {
        this.idComentario = idComentario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
}
