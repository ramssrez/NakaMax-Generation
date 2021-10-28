/* Insertar categorias */
INSERT INTO categorias (descripcion) VALUES ('Personalizable madera');
INSERT INTO categorias (descripcion) VALUES ('Personalizable metal');
INSERT INTO categorias (descripcion) VALUES ('Serigrafía');
INSERT INTO categorias (descripcion) VALUES ('Posters y Cuadros');
INSERT INTO categorias (descripcion) VALUES ('Ropa');
INSERT INTO categorias (descripcion) VALUES ('Escolares');
INSERT INTO categorias (descripcion) VALUES ('Manga y Comics');
INSERT INTO categorias (descripcion) VALUES ('Peluches');
INSERT INTO categorias (descripcion) VALUES ('Funkos');

/* Inserta  comentarios contactanos*/
INSERT INTO cometarios_contac_us (`nombre`, `correo`, `telefono`, `comentario`) VALUES ('Jose Sanchez Hernandez', 'jsh@gmail.com', '55555551413', 'Esta es la mejor pagina para encontrar productos');
INSERT INTO cometarios_contac_us (`nombre`, `correo`, `telefono`, `comentario`) VALUES ('Sandra', 'srh@gmail.com', '5555555557', 'A que se dedica la pagina');
INSERT INTO cometarios_contac_us (`correo`,`comentario`) VALUES ('rrp@gmail.com', 'La pagina puede mejorar');
INSERT INTO cometarios_contac_us (`nombre`, `correo`, `telefono`, `comentario`) VALUES ('Rogelio Luna', 'rlh@gmail.com', '5555555589', 'Vender productos como Katanas');
INSERT INTO cometarios_contac_us (`nombre`, `correo`, `telefono`, `comentario`) VALUES ('Ernesto Rodriguez', 'erg@gmail.com', '5555555571', 'Como me puedo dar de alta');


/* Insertar vendedores */
INSERT INTO nakamax.vendedores (nombre, apellidos, rfc, correo, password, fecha_nacimiento, telefono) VALUES ('Lesly', 'Wong', 'WOSL990108MDFGFNU7', 'less_uu0@gmail.com', 'camelwong', '1999-01-08', '9356783400');
INSERT INTO nakamax.vendedores (nombre, apellidos, rfc, correo, password, fecha_nacimiento, telefono) VALUES ('Atenea', 'Venegas', 'VEDA910602MSSFFR33', 'atv_5@gmail.com', 'aeneta', '1991-06-02', '7923564680');
INSERT INTO nakamax.vendedores (nombre, apellidos, rfc, correo, password, fecha_nacimiento, telefono) VALUES ('Alberto', 'Regil', 'RESA850910HSDGFG00', 'reg_al@gmail.com', 'elbetito', '1985-09-10', '4925050235');
INSERT INTO nakamax.vendedores (nombre, apellidos, rfc, correo, password, fecha_nacimiento, telefono) VALUES ('Oralia', 'Mayorga', 'MASO720405MFGGHH44', 'may_orale@gmail.com', 'patitofeo', '1972-04-05', '4922349292');
INSERT INTO nakamax.vendedores (nombre, apellidos, rfc, correo, password, fecha_nacimiento, telefono) VALUES ('Elizabeth', 'Soto', 'SOBEMSFFHFHDEHG68F', 'soto_03@gmail.com', 'area51', '1990-03-03', '4933292923');

/* Insertar reportes pagina */
INSERT INTO nakamax.reportes_pagina (descripcion, is_general, is_link_down) VALUES ('Carga lenta, no se completa la carga de la pagina', '1', '0');
INSERT INTO nakamax.reportes_pagina (descripcion, is_general, is_link_down) VALUES ('Me redirige a otra pagina al hacer click en un producto', '1', '1');
INSERT INTO nakamax.reportes_pagina (descripcion, is_general, is_link_down) VALUES ('No se cargan mis articulos en el carrito', '1', '0');
INSERT INTO nakamax.reportes_pagina (descripcion, is_general, is_link_down) VALUES ('Me marca una compra de un precio elevado que no corresponde a la cantidad de productos seleccionados en el carrito', '1', '0');
INSERT INTO nakamax.reportes_pagina (descripcion, is_general, is_link_down) VALUES ('No se completa la carga de algunos elementos, no aparece la imagen', '1', '1');


-- Inserciones de productos

INSERT INTO productos VALUES(NULL, "Shusui Sword Roronoa Zoro - One piece", 1650.99, "Espada de metal", "url", 4, 0,0,1);
INSERT INTO `nakamax`.`productos` (`nombre`, `costo`, `descripcion`, `imagen`, `stock`, `personalizable`) VALUES ('Shusui Sword Roronoa Zoro - One piece', '1650.99', 'Espada de metal', 'URL', '4', '0');
