package com.nakamax.model;

import javax.persistence.*;

@Entity(name = "compradores")
public class Comprador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_comprador;
    private String nombre;
    private String apellidos;
    private String usuario_tag;
    private String genero_favorito;
    private String correo;
    private String password;
    @Column(name = "fecha_nacimiento")
    private String fechaNacimiento;

    public Comprador(){
    }
    public Comprador(Integer id_comprador, String nombre, String apellidos, String usuario_tag, String genero_favorito, String correo, String password, String fechaNacimiento) {
        this.id_comprador = id_comprador;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.usuario_tag = usuario_tag;
        this.genero_favorito = genero_favorito;
        this.correo = correo;
        this.password = password;
        this.fechaNacimiento = fechaNacimiento;
    }

    public Integer getId_comprador() {
        return id_comprador;
    }

    public void setId_comprador(Integer id_comprador) {
        this.id_comprador = id_comprador;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getUsuario_tag() {
        return usuario_tag;
    }

    public void setUsuario_tag(String usuario_tag) {
        this.usuario_tag = usuario_tag;
    }

    public String getGenero_favorito() {
        return genero_favorito;
    }

    public void setGenero_favorito(String genero_favorito) {
        this.genero_favorito = genero_favorito;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
}
