package com.nakamax.model;

public class ContactUs {
    private Integer idComentario;
    private String nombre;
    private String correo;
    private String telefono;
    private String comentario;

    public ContactUs() {

    }

    public ContactUs(Integer idComentario, String nombre, String correo, String telefono, String comentario) {
        this.idComentario = idComentario;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
}
