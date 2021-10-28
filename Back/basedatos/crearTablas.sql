/* Se crea la base de Naka+ */

CREATE SCHEMA nakamax DEFAULT CHARACTER SET utf8 ;

/* Se selecciona para su uso y modificacion la base de naka+ */
USE nakamax ;

/* Tabla compradores */

#codigo

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


/* Tabla de personalizables */

/* CREATE TABLE nakamax.personalizables (
  id_personalizable INT NOT NULL AUTO_INCREMENT,
  id_size INT NOT NULL,
  id_color INT NOT NULL,
  id_material INT NOT NULL,
  costo_extra FLOAT NOT NULL,
  descripcion VARCHAR(255) NULL,
  PRIMARY KEY (id_personalizable)
); */

/* Tabla productos */

#codigo

/* Tabla de categorias*/
CREATE TABLE categorias (
  id_categoria INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_categoria))


/* Tabla de compras*/

#codigo

/* Tabla reportes producto */

#codigo

/* Tabla reportes pagina */
CREATE TABLE reportes_pagina (
  id_reporte_pag INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255) NOT NULL,
  is_general TINYINT(1) NULL,
  is_link_down VARCHAR(45) NULL,
  PRIMARY KEY (id_reporte_pag))


/* Tabla de Contactanos */
CREATE TABLE comentarios_contac_us (
  id_comentario INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NULL,
  correo VARCHAR(255) NOT NULL,
  telefono VARCHAR(255) NULL,
  comentario VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_comentario))


/* Tabla de Administradores */
CREATE TABLE nakamax.administradores (
  id_admin INT NOT NULL AUTO_INCREMENT,
  nombres VARCHAR(255) NOT NULL,
  apellido_paterno VARCHAR(255) NOT NULL,
  apellido_materno VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  github VARCHAR(255) NOT NULL,
  linkedin VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_admin)
);

/* Tablas pivote */

/* Tabla pivote_prod_cat */
CREATE TABLE nakamax.pivote_prod_cat (
  id_producto INT NOT NULL,
  id_categoria INT NOT NULL,
  INDEX fk_pivote_prod_cat_productos_idx (id_producto ASC) VISIBLE,
  INDEX fk_pivote_prod_cat_categorias_idx (id_categoria ASC) VISIBLE,
  CONSTRAINT fk_pivote_prod_cat_productos
    FOREIGN KEY (id_producto)
    REFERENCES nakamax.productos (id_producto)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_pivote_prod_cat_categorias
    FOREIGN KEY (id_categoria)
    REFERENCES nakamax.categorias (id_categoria)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Tabla pivote_comp_prod
CREATE TABLE nakamax.pivote_comp_prod (
  id_compra INT NOT NULL,
  id_producto INT NOT NULL,
  INDEX fk_pivote_comp_prod_compra_idx (id_compra ASC) VISIBLE,
  INDEX fk_pivote_comp_prod_productos_idx (id_producto ASC) VISIBLE,
  CONSTRAINT fk_pivote_comp_prod_compra
    FOREIGN KEY (id_compra)
    REFERENCES nakamax.compra (id_compra)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_pivote_comp_prod_productos
    FOREIGN KEY (id_producto)
    REFERENCES nakamax.productos (id_producto)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Tabla piv_repo_comp
CREATE TABLE nakamax.piv_repo_comp (
  id_comprador INT NOT NULL,
  id_reporte_pag INT NOT NULL,
  INDEX fk_piv_repo_comp_campradores_idx (id_comprador ASC) VISIBLE,
  INDEX fk_piv_repo_comp_reportes_pagina_idx (id_reporte_pag ASC) VISIBLE,
  CONSTRAINT fk_piv_repo_comp_campradores
    FOREIGN KEY (id_comprador)
    REFERENCES nakamax.campradores (id_comprador)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_piv_repo_comp_reportes_pagina
    FOREIGN KEY (id_reporte_pag)
    REFERENCES nakamax.reportes_pagina (id_reporte_pag)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Tabla nakamax.piv_adm_repo
CREATE TABLE nakamax.piv_adm_repo (
  id_admin INT NOT NULL,
  id_reporte_pag INT NOT NULL,
  INDEX fk_piv_adm_repo_administradores_idx (id_admin ASC) VISIBLE,
  INDEX fk_piv_adm_repo_reportes_pagina_idx (id_reporte_pag ASC) VISIBLE,
  CONSTRAINT fk_piv_adm_repo_administradores
    FOREIGN KEY (id_admin)
    REFERENCES nakamax.administradores (id_admin)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_piv_adm_repo_reportes_pagina
    FOREIGN KEY (id_reporte_pag)
    REFERENCES nakamax.reportes_pagina (id_reporte_pag)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Tabla piv_repo_vend
CREATE TABLE nakamax.piv_repo_vend (
  id_reporte_pag INT NOT NULL,
  id_vendedor INT NOT NULL,
  INDEX fk_piv_repo_vend_reportes_pagina_idx (id_reporte_pag ASC) VISIBLE,
  INDEX fk_piv_repo_vend_vendedores_idx (id_vendedor ASC) VISIBLE,
  CONSTRAINT fk_piv_repo_vend_reportes_pagina
    FOREIGN KEY (id_reporte_pag)
    REFERENCES nakamax.reportes_pagina (id_reporte_pag)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_piv_repo_vend_vendedores
    FOREIGN KEY (id_vendedor)
    REFERENCES nakamax.vendedores (id_vendedor)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Tabla piv_conus_admin
CREATE TABLE nakamax.piv_conus_admin (
  id_comentario INT NOT NULL,
  id_admin INT NOT NULL,
  INDEX fk_piv_conus_admin_cometarios_contac_us_idx (id_comentario ASC) VISIBLE,
  INDEX fk_piv_conus_admin_administradores_idx (id_admin ASC) VISIBLE,
  CONSTRAINT fk_piv_conus_admin_cometarios_contac_us
    FOREIGN KEY (id_comentario)
    REFERENCES nakamax.cometarios_contac_us (id_comentario)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_piv_conus_admin_administradores
    FOREIGN KEY (id_admin)
    REFERENCES nakamax.administradores (id_admin)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Tabla piv_adm_repro
CREATE TABLE nakamax.piv_adm_repro (
  id_admin INT NOT NULL,
  id_reporte INT NOT NULL,
  INDEX fk_piv_adm_repro_administradores_idx (id_admin ASC) VISIBLE,
  INDEX fk_piv_adm_repro_reportes_producto_idx (id_reporte ASC) VISIBLE,
  CONSTRAINT fk_piv_adm_repro_administradores
    FOREIGN KEY (id_admin)
    REFERENCES nakamax.administradores (id_admin)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_piv_adm_repro_reportes_producto
    FOREIGN KEY (id_reporte)
    REFERENCES nakamax.reportes_producto (id_reporte)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Tabla piv_vend_repro
CREATE TABLE nakamax.piv_vend_repro (
  id_reporte INT NOT NULL,
  id_vendedor INT NOT NULL,
  INDEX fk_piv_vend_repro_reportes_producto_idx (id_reporte ASC) VISIBLE,
  INDEX fk_piv_vend_repro_vendedores_idx (id_vendedor ASC) VISIBLE,
  CONSTRAINT fk_piv_vend_repro_reportes_producto
    FOREIGN KEY (id_reporte)
    REFERENCES nakamax.reportes_producto (id_reporte)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_piv_vend_repro_vendedores
    FOREIGN KEY (id_vendedor)
    REFERENCES nakamax.vendedores (id_vendedor)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);
