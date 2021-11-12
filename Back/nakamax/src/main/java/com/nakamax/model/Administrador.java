package com.nakamax.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "administradores")
public class Administrador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_admin")
    private Integer id;

    @Column(name = "nombres")
    private String nombre;

    @Column(name = "apellido_paterno")
    private String apellidoPaterno;

    @Column(name = "apellido_materno")
    private String apellidoMaterno;

    private String correo;
    private String password;
    private String imagen;
    private String github;
    private String linkedin;

    @JoinTable(
            name = "rel_administradores_reportes_pag",
            joinColumns = @JoinColumn(name = "fk_administrador", nullable = false),
            inverseJoinColumns = @JoinColumn(name="fk_reporte_pagina", nullable = false)
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private List<ReportesPagina> reportes_pagina;

    public void addReport(ReportesPagina reportePagina){
        if(this.reportes_pagina == null){
            this.reportes_pagina = new ArrayList<>();
        }
        this.reportes_pagina.add(reportePagina);
    }

    //tabla pivote administrador - contactanos
    @JoinTable(
            name = "piv_admin_contactanos",
            joinColumns = @JoinColumn(name = "fk_admin", nullable = false),
            inverseJoinColumns = @JoinColumn(name="fk_comentario", nullable = false)
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private List<ContactUs> comentarios;

    public void addReport(ContactUs contactUs){
        if(this.comentarios == null){
            this.comentarios = new ArrayList<>();
        }
        this.comentarios.add(contactUs);
    }

    public Administrador() {

    }

    public Administrador(Integer id, String nombre, String apellidoPaterno, String apellidoMaterno, String correo, String github, String linkedin) {
        this.id = id;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.correo = correo;
        this.github = github;
        this.linkedin = linkedin;
    }

    public List<ContactUs> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<ContactUs> comentarios) {
        this.comentarios = comentarios;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidoPaterno() {
        return apellidoPaterno;
    }

    public void setApellidoPaterno(String apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }

    public String getApellidoMaterno() {
        return apellidoMaterno;
    }

    public void setApellidoMaterno(String apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
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

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }
}
