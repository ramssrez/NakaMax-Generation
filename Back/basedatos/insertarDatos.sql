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
INSERT INTO comentarios_contac_us (`nombre`, `correo`, `telefono`, `comentario`) VALUES ('Jose Sanchez Hernandez', 'jsh@gmail.com', '55555551413', 'Esta es la mejor pagina para encontrar productos');
INSERT INTO comentarios_contac_us (`nombre`, `correo`, `telefono`, `comentario`) VALUES ('Sandra', 'srh@gmail.com', '5555555557', 'A que se dedica la pagina');
INSERT INTO comentarios_contac_us (`correo`,`comentario`) VALUES ('rrp@gmail.com', 'La pagina puede mejorar');
INSERT INTO comentarios_contac_us (`nombre`, `correo`, `telefono`, `comentario`) VALUES ('Rogelio Luna', 'rlh@gmail.com', '5555555589', 'Vender productos como Katanas');
INSERT INTO comentarios_contac_us (`nombre`, `correo`, `telefono`, `comentario`) VALUES ('Ernesto Rodriguez', 'erg@gmail.com', '5555555571', 'Como me puedo dar de alta');


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

/* Insertar compradores */
INSERT INTO nakamax.campradores (nombre, apellidos, usuario_tag, genero_favorito, correo, password, fecha_nacimiento) VALUES ('Paula', 'Cid', '1352YNM', 'ecchi', 'ejemplo@ejemplo.com', '123456', '2020-01-01');
INSERT INTO nakamax.campradores (nombre, apellidos, usuario_tag, genero_favorito, correo, password, fecha_nacimiento) VALUES ('Mariana', 'Gómez', '1246UMHM', 'josei', 'ejemplo@ejemplo.com', 'abcdf', '2019-01-01');
INSERT INTO nakamax.campradores (nombre, apellidos, usuario_tag, genero_favorito, correo, password, fecha_nacimiento) VALUES ('Héctor', 'Soto', '9865HMHAY', 'seinen', 'ejemplo@ejemplo.com', 'contraseña', '1994-01-01');
INSERT INTO nakamax.campradores (nombre, apellidos, usuario_tag, genero_favorito, correo, password, fecha_nacimiento) VALUES ('Eva', 'Benitez', '220369EUYN', 'moe', 'ejemplo@ejemplo.com', '987654', '1999-01-01');
INSERT INTO nakamax.campradores (nombre, apellidos, usuario_tag, genero_favorito, correo, password, fecha_nacimiento) VALUES ('Dulce', 'Reyes', '690747MJOQ', 'yaoi', 'ejemplo@ejemplo.com', 'pass123', '1996-01-01');
/* Insertando admins */
INSERT INTO administradores VALUES (NULL,'Francisco', 'Bañuelos ', 'Valadez ', 'franciscobanuelosvaladez@gmail.com', 'Bvfr012345', 'URL DE IMAGEN', 'https://www.linkedin.com/in/fcovaldz', 'https://github.com/Fcovaldz');
INSERT INTO administradores VALUES (NULL,'Carlos Alberto', 'Chavarria ', 'Ortiz ', 'carlosalberto.chavarriao@gmail.com', 'Chco012345', 'URL DE IMAGEN', 'https://www.linkedin.com/in/carlos-a-chavarria-ortiz', 'https://github.com/CarlosAChavarria');
INSERT INTO administradores VALUES (NULL,'Paula', 'Cid del Prado ', 'Soto ', 'paula.ciddelprado@gmail.com', 'Cips012345', 'URL DE IMAGEN', 'https://www.linkedin.com/in/paulaciddelprado', 'https://github.com/paulaciddelprado');
INSERT INTO administradores VALUES (NULL,'Luis Angel', 'Durán ', 'López ', 'luisadl591@gmail.com', 'Dull012345', 'URL DE IMAGEN', 'https://www.linkedin.com/in/luis-angel-duran', 'https://github.com/LuisAngelBonCorpse');
INSERT INTO administradores VALUES (NULL,'Raúl', 'Ramírez ', 'Pérez ', 'raulramirezperez1992@gmail.com', 'Rarp012345', 'URL DE IMAGEN', 'https://www.linkedin.com/in/ra%C3%BAl-ram%C3%ADrez-p%C3%A9rez-738aa9115/', 'https://github.com/ramssrez');

/* Se insertan personalizables */

/* DEJAR HASTA EL FINAL DEL CÓDIGO Insertar Reportes Producto */
INSERT INTO nakamax.reportes_producto (descripcion, is_llego, is_danger, is_tardio, id_compra) VALUES ('no llegó mi producto, lleva seis meses en proceso de envío', '0', '0', '1', '1');
INSERT INTO nakamax.reportes_producto (descripcion, is_llego, is_danger, is_tardio, id_compra) VALUES ('mi nombre no viene bien escrito en la playera que pedí, tiene errores ortográficos', '0', '1', '0', '2');
INSERT INTO nakamax.reportes_producto (descripcion, is_llego, is_danger, is_tardio, id_compra) VALUES ('la colección crochet de One Piece le faltan dos personajes, está incompleta', '0', '1', '0', '3');
INSERT INTO nakamax.reportes_producto (descripcion, is_llego, is_danger, is_tardio, id_compra) VALUES ('el color de mi funko era verde, no rosa, porque es un regalo para mi sobrino y es niño', '0', '1', '0', '4');
INSERT INTO nakamax.reportes_producto (descripcion, is_llego, is_danger, is_tardio, id_compra) VALUES ('mi figura de madera viene rota de la base', '0', '1', '0', '5');
