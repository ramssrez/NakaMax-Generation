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
  PRIMARY KEY (id_admin))


