/* Insertar categorias */
USE nakamax;
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
INSERT INTO comentarios_contac_us (nombre, correo, telefono, comentario) VALUES ('Jose Sanchez Hernandez', 'jsh@gmail.com', '55555551413', 'Esta es la mejor pagina para encontrar productos');
INSERT INTO comentarios_contac_us (nombre, correo, telefono, comentario) VALUES ('Sandra', 'srh@gmail.com', '5555555557', 'A que se dedica la pagina');
INSERT INTO comentarios_contac_us (correo,comentario) VALUES ('rrp@gmail.com', 'La pagina puede mejorar');
INSERT INTO comentarios_contac_us (nombre, correo, telefono, comentario) VALUES ('Rogelio Luna', 'rlh@gmail.com', '5555555589', 'Vender productos como Katanas');
INSERT INTO comentarios_contac_us (nombre, correo, telefono, comentario) VALUES ('Ernesto Rodriguez', 'erg@gmail.com', '5555555571', 'Como me puedo dar de alta');

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

/* Se insertan colores */
INSERT INTO nakamax.colores (color, precio) VALUES ('Café', '50');
INSERT INTO nakamax.colores (color, precio) VALUES ('Plata', '100');
INSERT INTO nakamax.colores (color, precio) VALUES ('Dorado', '150');

/* Se insertar tamaños */
INSERT INTO nakamax.sizes (size, precio) VALUES ('Pequeño', '50');
INSERT INTO nakamax.sizes (size, precio) VALUES ('Mediano', '150');
INSERT INTO nakamax.sizes (size, precio) VALUES ('Grande', '200');

/* Se insertan Materiales*/
INSERT INTO nakamax.materiales (material, precio) VALUES ('Madera', '500');
INSERT INTO nakamax.materiales (material, precio) VALUES ('Metal', '1500');
INSERT INTO nakamax.materiales (material, precio) VALUES ('Plastico', '700');

/* Inserciones de productos por categoria */

/* cat metal */ 
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Shusui Sword Roronoa Zoro - One piece", 1650.99, "Espada de metal", "url", 4, NULL, 1);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Rita - Escanor", 1850.60, "Hacha metal dorada", "url", 3, NULL, 2);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Medalla ", 750.50, "Medalla the witcher", "url", 8, NULL, 2);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Daga dragon", 1150.30, "Daga señor de los anillos", "url", 4, NULL, 5);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Escudo", 1500, "Espado Seven deadly sings", "url", 4, NULL, 3);

/* cat madera */
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Groot", 350, "Groot guardian galaxia", "url", 2, NULL, 1);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Luffy gear 4", 1650.99, "Muñeco Luffy roble", "url", 6, NULL, 2);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Shirohige", 1500, "Barbablanca One piece", "url", 2, NULL, 5);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Naruto hg1", 850, "Naruto resengan", "url", 4, NULL, 4);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Shirohige", 1650.99, "Barbablanca One piece", "url", 2, NULL, 5);

/* cat serigrafia */
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Cuadro goku", 350, "kakaroto", "url", 2, NULL, 1);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Playera death note", 1650.99, "otra playera", "url", 6, NULL, 2);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Taza power ranger", 1500, "ku chao", "url", 2, NULL, 5);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Playera verde baki", 850, "es verde", "url", 4, NULL, 4);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Otra playera", 1650.99, "no se que sea", "url", 2, NULL, 5);

/* cat poster y cuadros */
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("goku fase 4", 350, "la mejor fase", "url", 2, NULL, 1);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Doramon", 1650.99, "es azul", "url", 6, NULL, 2);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("La niña de abuelito dime tu", 1500, "el aguelo", "url", 2, NULL, 5);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Candy candy", 850, "candy", "url", 4, NULL, 4);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Seilor moon", 1650.99, "seilor escarlata", "url", 2, NULL, 5);

/* cat ropa */
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("pantalon goku", 350, "bombacho", "url", 2, NULL, 1);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Capa pikoro", 1650.99, "de algodon", "url", 6, NULL, 2);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("baston maestro roshi", 1500, "es de pino y roble", "url", 2, NULL, 5);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("vestido bulma", 850, "es azul", "url", 4, NULL, 4);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("blusa de sailor", 1650.99, "rosita", "url", 2, NULL, 5);

/* cat escolar */
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Lapicera", 350, "pa la escuela", "url", 2, NULL, 1);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("mochila", 1650.99, "contra agua", "url", 6, NULL, 2);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Maleta", 1500, "anti gandalla", "url", 2, NULL, 5);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Gorra", 850, "de chaca", "url", 4, NULL, 4);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Tenis", 1650.99, "Fosfo fosfo", "url", 2, NULL, 5);

/* cat manga */
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Groot", 350, "Groot guardian galaxia", "url", 2, NULL, 1);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Luffy gear 4", 1650.99, "Muñeco Luffy roble", "url", 6, NULL, 2);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Shirohige", 1500, "Barbablanca One piece", "url", 2, NULL, 5);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Naruto hg1", 850, "Naruto resengan", "url", 4, NULL, 4);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Shirohige", 1650.99, "Barbablanca One piece", "url", 2, NULL, 5);

/* cat peluche */
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Picachu", 350, "felpa", "url", 2, NULL, 1);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Bulbasaur", 1650.99, "felpa", "url", 6, NULL, 2);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Charmander", 1500, "felpa", "url", 2, NULL, 5);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Squirtle", 850, "felpa", "url", 4, NULL, 4);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Wartortle", 1650.99, "felpa", "url", 2, NULL, 5);

/* cat funko */
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Picachu", 350, "felpa", "edicion especial", 2, NULL, 1);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Bulbasaur", 1650.99, "edicion especial", "url", 6, NULL, 2);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Charmander", 1500, "edicion especial", "url", 2, NULL, 5);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Squirtle", 850, "edicion especial", "url", 4, NULL, 4);
INSERT INTO productos (nombre, costo, descripcion, imagen, stock, personalizable, id_vendedor) VALUES ("Wartortle", 1650.99, "edicion especial", "url", 2, NULL, 5);

/*Sección de compras*/
/* INSERTAR COMPRAS  con fecha actual del sistem operativo */
INSERT INTO compra VALUES (NULL, CURRENT_TIMESTAMP, 1);
INSERT INTO compra VALUES (NULL, CURRENT_TIMESTAMP, 2);
INSERT INTO compra VALUES (NULL, CURRENT_TIMESTAMP, 3);
INSERT INTO compra VALUES (NULL, CURRENT_TIMESTAMP, 4);
INSERT INTO compra VALUES (NULL, CURRENT_TIMESTAMP, 5);

/* DEJAR HASTA EL FINAL DEL CÓDIGO Insertar Reportes Producto */
INSERT INTO nakamax.reportes_producto (descripcion, is_llego, is_danger, is_tardio, id_compra) VALUES ('no llegó mi producto, lleva seis meses en proceso de envío', '0', '0', '1', '1');
INSERT INTO nakamax.reportes_producto (descripcion, is_llego, is_danger, is_tardio, id_compra) VALUES ('mi nombre no viene bien escrito en la playera que pedí, tiene errores ortográficos', '0', '1', '0', '2');
INSERT INTO nakamax.reportes_producto (descripcion, is_llego, is_danger, is_tardio, id_compra) VALUES ('la colección crochet de One Piece le faltan dos personajes, está incompleta', '0', '1', '0', '3');
INSERT INTO nakamax.reportes_producto (descripcion, is_llego, is_danger, is_tardio, id_compra) VALUES ('el color de mi funko era verde, no rosa, porque es un regalo para mi sobrino y es niño', '0', '1', '0', '4');
INSERT INTO nakamax.reportes_producto (descripcion, is_llego, is_danger, is_tardio, id_compra) VALUES ('mi figura de madera viene rota de la base', '0', '1', '0', '5');

INSERT INTO nakamax.personalizables (costo_extra, descripcion, id_material) VALUES ('1500', 'Figura hecha de metal', '2');
INSERT INTO nakamax.personalizables (costo_extra, descripcion, id_material) VALUES ('2000', 'Figura de madera', '1');
INSERT INTO nakamax.personalizables (costo_extra, descripcion, id_color) VALUES ('500', 'Figura pequeña de goku', '2');
INSERT INTO nakamax.personalizables (costo_extra, descripcion, id_size) VALUES ('4000', 'Figura Luffy de resina', '3');
