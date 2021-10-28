CREATE DATABASE nakamax;
USE nakamax ;
/* TABLA COMPRADORES */
CREATE TABLE campradores (
  `id_comprador` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `apellidos` VARCHAR(255) NOT NULL,
  `usuario_tag` VARCHAR(255) NOT NULL,
  `genero_favorito` VARCHAR(255) NOT NULL,
  `correo` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  PRIMARY KEY (`id_comprador`))
ENGINE = InnoDB;