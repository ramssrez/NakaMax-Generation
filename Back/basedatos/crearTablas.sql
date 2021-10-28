-- -----------------------------------------------------
-- Table `nakamax`.`vendedores`
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
-- Table `nakamax`.`reportes_pagina`
-- -----------------------------------------------------

CREATE TABLE reportes_pagina (
  id_reporte_pag INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255) NOT NULL,
  is_general TINYINT(1) NULL,
  is_link_down VARCHAR(45) NULL,
  PRIMARY KEY (id_reporte_pag))
ENGINE = InnoDB;

