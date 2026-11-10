/* Banco de ítems – NÚCLEO ESPECÍFICO (ampliación B): bases de datos, transparencia, contratación */

/* ---------- Bases de datos y sistemas de información ---------- */
Q('BD-12','bd','alto','aplicar',
 'La tabla CONTRATO tiene en la columna valor los registros 10, 20, NULL y 30. El resultado de SELECT AVG(valor) FROM CONTRATO es',
 ['15.','20.','NULL.','Error de ejecución.'],
 1,
 ['Sería dividir 60 entre 4, tratando NULL como cero.','Correcta. Las funciones de agregación ignoran los NULL: (10 + 20 + 30) / 3 = 20.','Solo si todos los valores fueran NULL.','La consulta es válida.'],
 'SQL – funciones de agregación y NULL')

Q('BD-13','bd','medio','aplicar',
 'Para contar cuántos contratistas distintos tienen contratos en la tabla CONTRATO(id, nit_contratista, valor), la consulta adecuada es',
 ['SELECT COUNT(*) FROM CONTRATO;','SELECT COUNT(DISTINCT nit_contratista) FROM CONTRATO;','SELECT SUM(nit_contratista) FROM CONTRATO;','SELECT MAX(nit_contratista) FROM CONTRATO;'],
 1,
 ['Cuenta contratos, no contratistas distintos.','Correcta.','Suma identificadores, lo cual no tiene sentido.','Devuelve un solo NIT.'],
 'SQL – COUNT DISTINCT')

Q('BD-14','bd','medio','comprender',
 'Una llave primaria de una tabla relacional debe ser',
 ['única y no nula para cada registro.','siempre un número consecutivo.','opcional y repetible.','obligatoriamente un texto.'],
 0,
 ['Correcta.','Puede ser natural o sustituta, numérica o no.','Contradice su definición.','Puede ser de cualquier tipo adecuado.'],
 'Modelo relacional')

Q('BD-15','bd','alto','aplicar',
 'Se necesita que un grupo de analistas consulte información de quejas sin ver los nombres ni las cédulas de los quejosos. Una solución adecuada en la base de datos es',
 ['entregarles la contraseña del administrador.','crear una vista que excluya esas columnas y otorgar permisos solo sobre la vista.','copiar la tabla completa a sus equipos.','borrar las columnas de nombre y cédula de la tabla original.'],
 1,
 ['Viola el principio de mínimo privilegio.','Correcta.','Aumenta el riesgo de fuga.','Se pierde información necesaria para otros procesos.'],
 'Seguridad en bases de datos – vistas y permisos')

Q('BD-16','bd','medio','comprender',
 'Los sistemas que registran en línea las operaciones diarias (radicación de quejas, actuaciones) se denominan OLTP, mientras que los sistemas optimizados para consultas analíticas sobre grandes volúmenes históricos se denominan',
 ['OLAP.','ERP.','CRM.','DNS.'],
 0,
 ['Correcta. Procesamiento analítico en línea.','Es un sistema de planificación de recursos empresariales.','Es un sistema de gestión de relaciones con clientes.','Es el sistema de nombres de dominio.'],
 'Sistemas de información – OLTP vs. OLAP')

Q('BD-17','bd','medio','aplicar',
 'Un contrato puede tener varios supervisores y un supervisor puede vigilar varios contratos. En un modelo relacional, esta relación se implementa',
 ['con una tabla intermedia que contenga las llaves de ambas entidades.','agregando una columna con varios supervisores separados por comas.','duplicando la tabla de contratos por cada supervisor.','con una sola tabla que mezcle contratos y supervisores sin llaves.'],
 0,
 ['Correcta. Relación muchos a muchos (N:M).','Viola la primera forma normal.','Genera redundancia.','Viola la integridad y la normalización.'],
 'Modelo entidad–relación')

Q('BD-18','bd','medio','comprender',
 'La diferencia entre las sentencias DELETE y DROP TABLE es que',
 ['DELETE elimina filas (con o sin condición) y conserva la estructura; DROP TABLE elimina la tabla completa con su estructura.','son equivalentes.','DROP solo elimina una fila.','DELETE elimina la base de datos.'],
 0,
 ['Correcta.','No lo son.','Elimina el objeto completo.','No corresponde.'],
 'SQL – lenguaje de manipulación y definición de datos')

Q('BD-19','bd','alto','analizar',
 'Una entidad hace respaldo completo cada domingo y respaldo incremental los demás días. Si el sistema falla el jueves, para restaurar se necesita',
 ['solo el respaldo del miércoles.','el respaldo completo del domingo y todos los incrementales de lunes a miércoles.','solo el respaldo completo del domingo.','un respaldo diferencial del jueves.'],
 1,
 ['El incremental contiene solo los cambios desde el último respaldo.','Correcta.','Se perderían los cambios de lunes a miércoles.','No existe en la estrategia descrita.'],
 'Estrategias de respaldo')

Q('BD-20','bd','medio','comprender',
 'La plataforma que permite el intercambio seguro de información entre entidades del Estado colombiano, como parte de los servicios ciudadanos digitales, se basa en el modelo de',
 ['interoperabilidad (por ejemplo, X-Road).','correo electrónico masivo.','hojas de cálculo compartidas.','redes sociales institucionales.'],
 0,
 ['Correcta. Servicio de interoperabilidad del Decreto 620 de 2020 y el Marco de Interoperabilidad.','No garantiza seguridad ni trazabilidad.','No es un mecanismo de interoperabilidad.','No corresponde.'],
 'Decreto 620 de 2020; Marco de Interoperabilidad para Gobierno Digital')

Q('BD-21','bd','alto','analizar',
 'Una transacción lee un dato que otra transacción modificó pero aún no ha confirmado; luego la segunda hace rollback. Este fenómeno se denomina',
 ['lectura sucia (dirty read).','interbloqueo (deadlock).','normalización.','indexación.'],
 0,
 ['Correcta. Ocurre con el nivel de aislamiento READ UNCOMMITTED.','Es una espera circular entre transacciones.','Es un proceso de diseño.','Es una técnica de optimización.'],
 'Niveles de aislamiento de transacciones')

/* ---------- Transparencia, gobierno y datos abiertos ---------- */
Q('TRA-13','transparencia','medio','comprender',
 'Según la Ley 1712 de 2014, además de las entidades públicas, son sujetos obligados',
 ['únicamente las entidades del orden nacional.','las personas naturales y jurídicas que cumplan funciones públicas o presten servicios públicos (respecto de esa información), los partidos políticos y las entidades que administren recursos parafiscales, entre otros.','todas las empresas privadas del país.','solo los organismos de control.'],
 1,
 ['Incluye todos los niveles.','Correcta. Art. 5 Ley 1712 de 2014.','Solo en los casos previstos por la ley.','Es mucho más amplio.'],
 'Ley 1712 de 2014, art. 5')

Q('TRA-14','transparencia','medio','aplicar',
 'Un ciudadano solicita el salario y la escala de remuneración de un procurador delegado. La entidad debe',
 ['negarla por ser información clasificada.','entregarla, porque la escala salarial de los servidores es información pública que debe estar publicada.','pedir autorización al servidor.','entregarla solo si el ciudadano demuestra interés.'],
 1,
 ['La remuneración de los cargos públicos no es clasificada.','Correcta. Art. 9 lit. c) Ley 1712 de 2014.','No se requiere autorización.','No se exige interés.'],
 'Ley 1712 de 2014, art. 9')

Q('TRA-15','transparencia','alto','analizar',
 'Una entidad publica sus datos de contratación, pero con errores, desactualizados y sin fecha de corte. Esta práctica desconoce principalmente el principio de',
 ['calidad de la información, que exige información veraz, oportuna, objetiva, actualizada y accesible.','gratuidad.','no discriminación.','divulgación proactiva, únicamente.'],
 0,
 ['Correcta. Art. 3 Ley 1712 de 2014.','No hubo cobro.','No hay trato discriminatorio.','La entidad sí publicó; el problema es la calidad.'],
 'Ley 1712 de 2014, art. 3')

Q('TRA-16','transparencia','medio','comprender',
 'Según el modelo de cinco estrellas para datos abiertos, publicar una tabla en formato CSV (estructurado y no propietario) corresponde a',
 ['una estrella.','tres estrellas.','cinco estrellas.','cero estrellas.'],
 1,
 ['Una estrella es cualquier formato con licencia abierta (por ejemplo, PDF).','Correcta. Estructurado y en formato no propietario.','Cinco estrellas requiere datos enlazados (RDF y URI con vínculos).','Tiene al menos una estrella si tiene licencia abierta.'],
 'Modelo de 5 estrellas de datos abiertos (Berners-Lee)')

Q('TRA-17','transparencia','medio','comprender',
 'Los pilares del gobierno abierto son',
 ['transparencia, participación ciudadana y colaboración.','reserva, jerarquía y control.','eficiencia, economía y rentabilidad.','legalidad, sanción y archivo.'],
 0,
 ['Correcta. Promovidos por la Alianza para el Gobierno Abierto (OGP), de la que Colombia hace parte.','Contrarios a la apertura.','Son principios de gestión.','No corresponde.'],
 'Alianza para el Gobierno Abierto')

Q('TRA-18','transparencia','medio','aplicar',
 'Al rediseñar el portal web de la dirección, para cumplir los criterios de accesibilidad de la Resolución MinTIC 1519 de 2020, debe garantizarse, entre otros,',
 ['que las imágenes tengan texto alternativo y que los contenidos puedan navegarse con teclado, siguiendo las pautas WCAG.','que el portal solo funcione en un navegador.','que los documentos se publiquen como imágenes escaneadas.','que se usen colores sin contraste para mejorar la estética.'],
 0,
 ['Correcta. Anexo 1 de la Resolución 1519 de 2020 (WCAG 2.1).','Limita el acceso.','Impide su lectura por lectores de pantalla.','Afecta a personas con baja visión.'],
 'Resolución MinTIC 1519 de 2020, Anexo 1')

Q('TRA-19','transparencia','alto','aplicar',
 'Una entidad responde una solicitud de información entregando solo una parte del documento, porque otra contiene datos clasificados. Esta actuación es',
 ['ilegal, porque debe entregarse todo o nada.','válida, porque la ley prevé la divulgación parcial: se entrega la parte no protegida y se motiva la reserva o clasificación del resto.','válida solo si el ciudadano lo autoriza.','ilegal, porque la información clasificada no existe.'],
 1,
 ['La ley permite la divulgación parcial.','Correcta. Art. 21 Ley 1712 de 2014.','No requiere autorización.','Está prevista en el art. 18.'],
 'Ley 1712 de 2014, art. 21')

Q('TRA-20','transparencia','medio','recordar',
 'El portal oficial en el que las entidades públicas colombianas publican sus conjuntos de datos abiertos es',
 ['www.datos.gov.co.','www.secop.gov.co.','www.sigep.gov.co.','www.suit.gov.co.'],
 0,
 ['Correcta.','Publica la contratación.','Información de empleo público.','Información de trámites.'],
 'Política de Gobierno Digital – Datos abiertos')

Q('TRA-21','transparencia','alto','analizar',
 'Una entidad publica un archivo en datos abiertos sin diccionario de datos y con nombres de columna como «c1», «c2» y «c3». El principal problema para la reutilización es',
 ['el tamaño del archivo.','la ausencia de metadatos que describan el significado, unidades y origen de cada variable.','el uso de formato CSV.','la licencia abierta.'],
 1,
 ['No es el problema principal.','Correcta. Sin metadatos el dato no es comprensible ni reutilizable.','El CSV es adecuado.','La licencia abierta favorece la reutilización.'],
 'Guía de datos abiertos – MinTIC')

/* ---------- Contratación estatal ---------- */
Q('CTR-13','contratacion','bajo','recordar',
 'Según la Ley 1150 de 2007, la regla general para la escogencia del contratista es',
 ['la contratación directa.','la licitación pública, salvo las excepciones previstas en la ley.','la mínima cuantía.','el concurso de méritos.'],
 1,
 ['Es excepcional.','Correcta. Art. 2 num. 1 Ley 1150 de 2007.','Aplica por cuantía.','Aplica a consultoría.'],
 'Ley 1150 de 2007, art. 2')

Q('CTR-14','contratacion','medio','aplicar',
 'Para adquirir computadores de características técnicas uniformes y de común utilización, sin Acuerdo Marco aplicable, la modalidad indicada es',
 ['selección abreviada, por ejemplo mediante subasta inversa.','concurso de méritos.','contratación directa.','licitación pública obligatoriamente.'],
 0,
 ['Correcta. Art. 2 num. 2 lit. a) Ley 1150 de 2007.','Es para consultoría.','No es una causal de contratación directa.','La ley prevé la selección abreviada para este caso.'],
 'Ley 1150 de 2007, art. 2 num. 2')

Q('CTR-15','contratacion','medio','comprender',
 'En una subasta inversa para bienes de características técnicas uniformes, el factor que determina la adjudicación, una vez verificados los requisitos habilitantes, es',
 ['la experiencia del proponente.','el menor precio ofrecido.','la mayor calidad técnica.','el apoyo a la industria nacional, exclusivamente.'],
 1,
 ['La experiencia es habilitante.','Correcta.','Los bienes son uniformes en sus características.','No es el factor determinante en la subasta.'],
 'Decreto 1082 de 2015 – subasta inversa')

Q('CTR-16','contratacion','alto','aplicar',
 'Un contrato tiene un valor inicial de 400 SMMLV. Según el artículo 40 de la Ley 80 de 1993, las adiciones no pueden superar',
 ['100 SMMLV.','200 SMMLV (50 % del valor inicial).','400 SMMLV.','no hay límite.'],
 1,
 ['No corresponde.','Correcta. Parágrafo del art. 40: no más del 50 % del valor inicial, expresado en SMMLV.','Sería el 100 %.','La ley fija un límite.'],
 'Ley 80 de 1993, art. 40 parágrafo')

Q('CTR-17','contratacion','medio','comprender',
 'La garantía que ampara a la entidad frente a que el oferente favorecido no suscriba el contrato o retire su oferta es la de',
 ['cumplimiento.','seriedad de la oferta.','calidad del servicio.','responsabilidad civil extracontractual.'],
 1,
 ['Ampara la ejecución del contrato.','Correcta. Decreto 1082 de 2015.','Ampara la calidad del objeto.','Ampara daños a terceros.'],
 'Decreto 1082 de 2015 – garantías')

Q('CTR-18','contratacion','medio','aplicar',
 'La PGN y una universidad pública celebrarán un convenio para desarrollar herramientas de analítica. Por tratarse de dos entidades estatales, la modalidad aplicable es',
 ['licitación pública.','contratación directa (contrato o convenio interadministrativo).','mínima cuantía.','subasta inversa.'],
 1,
 ['No es la regla para estos casos.','Correcta. Art. 2 num. 4 lit. c) Ley 1150 de 2007.','No corresponde.','No corresponde.'],
 'Ley 1150 de 2007, art. 2 num. 4 lit. c)')

Q('CTR-19','contratacion','alto','analizar',
 'Tras una emergencia que afecta la continuidad del servicio, una entidad declara la urgencia manifiesta y contrata directamente. Después de celebrar los contratos, debe',
 ['archivar los documentos sin más trámite.','enviar el acto de declaratoria, los contratos y sus antecedentes al organismo de control fiscal competente para su revisión.','pedir autorización al Congreso.','esperar a que el contratista los publique.'],
 1,
 ['No es lo procedente.','Correcta. Arts. 42 y 43 Ley 80 de 1993.','No se requiere.','La obligación es de la entidad.'],
 'Ley 80 de 1993, arts. 42 y 43')

Q('CTR-20','contratacion','alto','aplicar',
 'En una licitación pública, la entidad necesita modificar el pliego de condiciones. Según la normativa, no puede expedir adendas',
 ['en ningún momento del proceso.','dentro de los tres días hábiles anteriores al cierre del proceso.','después de publicar el aviso de convocatoria.','sin autorización de la Contraloría.'],
 1,
 ['Sí puede hacerlo antes de ese término.','Correcta. Art. 89 Ley 1474 de 2011, que modificó el art. 30 de la Ley 80 de 1993.','Las adendas se expiden después de abrir el proceso.','No se requiere.'],
 'Ley 1474 de 2011, art. 89')

Q('CTR-21','contratacion','alto','analizar',
 'Un oferente no adjuntó un certificado que acredita un requisito habilitante, pero que no otorga puntaje. Según la Ley 1150 de 2007 (modificada por la Ley 1882 de 2018), la entidad',
 ['debe rechazar la oferta de inmediato.','debe permitir que lo subsane hasta el término de traslado del informe de evaluación.','puede dar puntaje adicional por presentarlo después.','debe declarar desierto el proceso.'],
 1,
 ['La ausencia de requisitos que no afectan la asignación de puntaje no es causal de rechazo inmediato.','Correcta. Parágrafo 1 del art. 5 Ley 1150 de 2007.','Lo subsanable no otorga puntaje.','No procede.'],
 'Ley 1150 de 2007, art. 5 parágrafo 1; Ley 1882 de 2018')

Q('CTR-22','contratacion','medio','comprender',
 'El principio de selección objetiva implica que el ofrecimiento más favorable se determina',
 ['por la afinidad del oferente con la entidad.','con base en factores técnicos y económicos claros, previstos en el pliego, sin considerar motivaciones subjetivas.','por sorteo en todos los casos.','por recomendación de un superior.'],
 1,
 ['Contradice el principio.','Correcta. Art. 5 Ley 1150 de 2007.','El sorteo es excepcional y reglado.','Contradice el principio.'],
 'Ley 1150 de 2007, art. 5')
