CREATE DATABASE nakamax;
USE nakamax;

/* Tabla de Contacta nos */
CREATE TABLE cometarios_contac_us (
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
