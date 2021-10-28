/* Creación de la base de datos */
CREATE DATABASE nakamax;
/* Uso de la base de datos */
USE nakamax;

/* Tabla de Contactanos */
CREATE TABLE comentarios_contac_us (
  id_comentario INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NULL,
  correo VARCHAR(255) NOT NULL,
  telefono VARCHAR(255) NULL,
  comentario VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_comentario))
ENGINE = InnoDB;

/* Tabla de categorias*/
CREATE TABLE categorias (
  id_categoria INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_categoria))
ENGINE = InnoDB;

/* Tabla Vendedores */
CREATE TABLE vendedores (
  id_vendedor INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  rfc VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  telefono VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_vendedor))
ENGINE = InnoDB;

/* Tabla reportes pagina */
CREATE TABLE reportes_pagina (
  id_reporte_pag INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255) NOT NULL,
  is_general TINYINT(1) NULL,
  is_link_down VARCHAR(45) NULL,
  PRIMARY KEY (id_reporte_pag))
ENGINE = InnoDB;

-- Table productos

CREATE TABLE productos (
  id_producto INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  costo FLOAT NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  stock INT NULL,
  personalizable TINYINT(1) NULL,
  id_vendedor INT NOT NULL,
  id_personalizable INT NULL,
  PRIMARY KEY (id_producto),
  INDEX fk_productos_vendedores_idx (id_vendedor ASC) INVISIBLE,
  INDEX fk_productos_personalizables_idx (id_personalizable ASC) VISIBLE,
  CONSTRAINT fk_productos_vendedores
    FOREIGN KEY (id_vendedor)
    REFERENCES nakamax.vendedores (id_vendedor)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_productos_personalizables
    FOREIGN KEY (id_personalizable)
    REFERENCES nakamax.personalizables (id_personalizable)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- Table compra

CREATE TABLE compra (
  id_compra INT NOT NULL AUTO_INCREMENT,
  fecha_compra TIMESTAMP NOT NULL,
  id_comprador INT NOT NULL,
  PRIMARY KEY (id_compra),
  INDEX fk_compra_campradores_idx (id_comprador ASC) VISIBLE,
  CONSTRAINT fk_compra_campradores
    FOREIGN KEY (id_comprador)
    REFERENCES nakamax.campradores (id_comprador)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;