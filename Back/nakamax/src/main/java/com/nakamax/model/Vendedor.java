package com.nakamax.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany
    private List<Producto> productos;


    //tabla pivote vendedor - reportes página

    @JoinTable(
            name = "piv_repo_vend",
            joinColumns = @JoinColumn(name = "fk_vendedor", nullable = false),
            inverseJoinColumns = @JoinColumn(name="fk_reporte", nullable = false)
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private List<ReportesPagina> reportes_pagina;

    public void addReport(ReportesPagina reportePagina){
        if(this.reportes_pagina == null){
            this.reportes_pagina = new ArrayList<>();
        }
        this.reportes_pagina.add(reportePagina);
    }

    //tabla pivote vendedor - reportes producto
    @JoinTable(
            name = "piv_vendedores_rep_producto",
            joinColumns = @JoinColumn(name = "fk_vendedor", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "fk_reporte_producto", nullable = false)
    )

    @ManyToMany(cascade = CascadeType.ALL)
    private List<ReporteProducto> reportes_producto;

    public  void  addReportProduct(ReporteProducto reporteProducto){
        if(this.reportes_producto == null){
            this.reportes_producto = new ArrayList<>();
        }
        this.reportes_producto.add(reporteProducto);
    }

    // constructor tabla vendedor
    public Vendedor(){
    }

    public Vendedor(Integer id_vendedor, String nombre, String apellidos, String rfc, String correo, String password, String fechaNacimiento, String telefono, List<ReportesPagina> reportesPaginas) {
        this.id_vendedor = id_vendedor;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.rfc = rfc;
        this.correo = correo;
        this.password = password;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.reportes_pagina = reportesPaginas;
    }

    public List<ReporteProducto> getReportes_producto() {
        return reportes_producto;
    }

    public void setReportes_producto(List<ReporteProducto> reportes_producto) {
        this.reportes_producto = reportes_producto;
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

    public List<ReportesPagina> getReportesPaginas() {
        return reportes_pagina;
    }

    public void setReportesPaginas(List<ReportesPagina> reportesPaginas) {
        this.reportes_pagina = reportesPaginas;
    }

    public List<Producto> getProducto() {
        return productos;
    }

    public void setProducto(List<Producto> producto) {
        this.productos = producto;
    }

    public List<ReportesPagina> getReportes_pagina() {
        return reportes_pagina;
    }

    public void setReportes_pagina(List<ReportesPagina> reportes_pagina) {
        this.reportes_pagina = reportes_pagina;
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }
}
