/* Se crea la base de Naka+ */

CREATE SCHEMA nakamax DEFAULT CHARACTER SET utf8 ;

/* Se selecciona para su uso y modificacion la base de naka+ */
USE nakamax ;

/* Tabla compradores */
CREATE TABLE nakamax.campradores (
  id_comprador INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  usuario_tag VARCHAR(255) NOT NULL,
  genero_favorito VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  PRIMARY KEY (id_comprador)
);

/* Tabla Vendedores */
CREATE TABLE nakamax.vendedores (
  id_vendedor INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  rfc VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  telefono VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_vendedor)
);

/* Tabla sizes */
CREATE TABLE nakamax.sizes (
  id_size INT NOT NULL AUTO_INCREMENT,
  size VARCHAR(25) NOT NULL,
  precio FLOAT NOT NULL,
  PRIMARY KEY (id_size)
);

 /* Tabla colores */
CREATE TABLE nakamax.colores (
  id_color INT NOT NULL AUTO_INCREMENT,
  color VARCHAR(25) NOT NULL,
  precio FLOAT NOT NULL,
  PRIMARY KEY (id_color)
);

/* Tabla Material */
CREATE TABLE nakamax.materiales (
  id_material INT NOT NULL AUTO_INCREMENT,
  material VARCHAR(25) NOT NULL,
  precio FLOAT NOT NULL,
  PRIMARY KEY (id_material)
);

  /* Tabla de categorias*/
CREATE TABLE nakamax.categorias (
  id_categoria INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_categoria)
);

  /* Tabla reportes pagina */
CREATE TABLE nakamax.reportes_pagina (
  id_reporte_pag INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255) NOT NULL,
  is_general TINYINT(1) NULL,
  is_link_down VARCHAR(45) NULL,
  PRIMARY KEY (id_reporte_pag)
);


/* Tabla de Contactanos */
CREATE TABLE nakamax.comentarios_contac_us (
  id_comentario INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NULL,
  correo VARCHAR(255) NOT NULL,
  telefono VARCHAR(255) NULL,
  comentario VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_comentario)
);


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

/* Tabla de personalizables */
CREATE TABLE nakamax.personalizables (
  id_personalizable INT NOT NULL AUTO_INCREMENT,
  costo_extra FLOAT NOT NULL,
  descripcion VARCHAR(255) NULL,
  id_color INT NULL,
  id_size INT NULL,
  id_material INT NULL,
  PRIMARY KEY (id_personalizable),
  INDEX fk_personalizables_color_idx (id_color ASC) VISIBLE,
  INDEX fk_personalizables_size_idx (id_size ASC) VISIBLE,
  INDEX fk_personalizables_material_idx (id_material ASC) VISIBLE,
  CONSTRAINT fk_personalizables_color
    FOREIGN KEY (id_color)
    REFERENCES nakamax.colores (id_color)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_personalizables_size
    FOREIGN KEY (id_size)
    REFERENCES nakamax.sizes (id_size)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_personalizables_material
    FOREIGN KEY (id_material)
    REFERENCES nakamax.materiales (id_material)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

/* Tabla productos */
CREATE TABLE nakamax.productos (
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
    ON UPDATE NO ACTION
);

/* Tabla de compras*/
CREATE TABLE nakamax.compra (
  id_compra INT NOT NULL AUTO_INCREMENT,
  fecha_compra TIMESTAMP NOT NULL,
  id_comprador INT NOT NULL,
  PRIMARY KEY (id_compra),
  INDEX fk_compra_campradores_idx (id_comprador ASC) VISIBLE,
  CONSTRAINT fk_compra_campradores
    FOREIGN KEY (id_comprador)
    REFERENCES nakamax.campradores (id_comprador)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

/* Tabla reportes producto */
CREATE TABLE nakamax.reportes_producto (
  id_reporte INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255) NOT NULL,
  is_llego TINYINT(1) NULL,
  is_danger TINYINT(1) NULL,
  is_tardio TINYINT(1) NULL,
  id_compra INT NOT NULL,
  PRIMARY KEY (id_reporte),
  INDEX fk_reportes_producto_compra_idx (id_compra ASC) VISIBLE,
  CONSTRAINT fk_reportes_producto_compra
    FOREIGN KEY (id_compra)
    REFERENCES nakamax.compra (id_compra)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
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
    REFERENCES nakamax.comentarios_contac_us (id_comentario)
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

