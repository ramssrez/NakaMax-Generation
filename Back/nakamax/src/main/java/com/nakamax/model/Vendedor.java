package com.nakamax.model;

import javax.persistence.*;

@Entity(name = "vendedores")
public class Vendedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_vendedor;

    private String nombre;

    private String apellidos;
    private String rfc;
    private String correo;
    private String password;

    @Column (name = "fecha_nacimiento")
    private String fechaNacimiento;

    private String telefono;

    public Vendedor(){
    }

    public Vendedor(Integer id_vendedor, String nombre, String apellidos, String rfc, String correo, String password, String fechaNacimiento, String telefono) {
        this.id_vendedor = id_vendedor;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.rfc = rfc;
        this.correo = correo;
        this.password = password;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }

    public Integer getId_vendedor() {
        return id_vendedor;
    }

    public void setId_vendedor(Integer id_vendedor) {
        this.id_vendedor = id_vendedor;
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

    public String getRfc() {
        return rfc;
    }

    public void setRfc(String rfc) {
        this.rfc = rfc;
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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
