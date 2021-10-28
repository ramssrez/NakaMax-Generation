/* Se crea la base de Naka+ */

CREATE SCHEMA IF NOT EXISTS nakamax DEFAULT CHARACTER SET utf8 ;

/* Se selecciona para su uso y modificacion la base de naka+ */
USE nakamax ;


/* Se crea tabla de personalizables */

CREATE TABLE IF NOT EXISTS nakamax.personalizables (
  id_personalizable INT NOT NULL AUTO_INCREMENT,
  size VARCHAR(255) NOT NULL,
  color VARCHAR(255) NOT NULL,
  material VARCHAR(255) NOT NULL,
  costo_extra FLOAT NOT NULL,
  descripcion VARCHAR(255) NULL,
  PRIMARY KEY (id_personalizable)
);

/* Se crea tabla de Administradores */
CREATE TABLE IF NOT EXISTS nakamax.administradores (
  id_admin INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  apellido_paterno VARCHAR(255) NOT NULL,
  apellido_materno VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  github VARCHAR(255) NOT NULL,
  linkedin VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_admin)
  );

-- -----------------------------------------------------
-- Table nakamax.vendedores
-- -----------------------------------------------------

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

-- -----------------------------------------------------
-- Table nakamax.reportes_pagina
-- -----------------------------------------------------

CREATE TABLE reportes_pagina (
  id_reporte_pag INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255) NOT NULL,
  is_general TINYINT(1) NULL,
  is_link_down VARCHAR(45) NULL,
  PRIMARY KEY (id_reporte_pag))
ENGINE = InnoDB;

