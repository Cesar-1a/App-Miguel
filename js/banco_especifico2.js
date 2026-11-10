/* Banco de ítems – NÚCLEO ESPECÍFICO (parte 2) */

/* ---------- Bases de datos y sistemas de información ---------- */
Q('BD-01','bd','medio','aplicar',
 'Se tienen las tablas ENTIDAD(id, nombre) y CONTRATO(id, entidad_id, valor). Se requiere listar TODAS las entidades, incluidas las que no tienen contratos, con el número de contratos de cada una. La consulta adecuada utiliza',
 ['INNER JOIN entre ENTIDAD y CONTRATO, con COUNT(*).','LEFT JOIN desde ENTIDAD hacia CONTRATO, con COUNT(CONTRATO.id) y GROUP BY por entidad.','CROSS JOIN entre ambas tablas.','UNION entre ENTIDAD y CONTRATO.'],
 1,
 ['INNER JOIN excluye entidades sin contratos.',
  'Correcta. LEFT JOIN conserva todas las filas de ENTIDAD; COUNT(CONTRATO.id) devuelve 0 cuando no hay coincidencias (COUNT(*) devolvería 1).',
  'CROSS JOIN produce el producto cartesiano.',
  'UNION apila resultados de consultas compatibles, no relaciona tablas.'],
 'SQL – JOIN y agregaciones')

Q('BD-02','bd','medio','aplicar',
 'Se quiere obtener los municipios con más de 10 quejas. La cláusula SQL que permite filtrar sobre el resultado de la agregación COUNT(*) es',
 ['WHERE COUNT(*) > 10','HAVING COUNT(*) > 10','ORDER BY COUNT(*) > 10','DISTINCT COUNT(*) > 10'],
 1,
 ['WHERE filtra filas antes de agrupar y no admite funciones de agregación.',
  'Correcta. HAVING filtra grupos después del GROUP BY.',
  'ORDER BY ordena, no filtra.',
  'No es sintaxis válida para filtrar.'],
 'SQL – GROUP BY y HAVING')

Q('BD-03','bd','alto','analizar',
 'Una tabla REGISTRO(cedula, cod_curso, nombre_persona, nombre_curso, nota) tiene como llave primaria compuesta (cedula, cod_curso). El nombre de la persona depende solo de la cédula. Esta tabla incumple',
 ['la primera forma normal, porque tiene una llave compuesta.','la segunda forma normal, por existir dependencias parciales de atributos no clave respecto de parte de la llave.','la tercera forma normal únicamente.','ninguna forma normal.'],
 1,
 ['Una llave compuesta no viola la 1FN.',
  'Correcta. nombre_persona depende de cedula y nombre_curso de cod_curso: son dependencias parciales.',
  'También incumple la 2FN, que es previa a la 3FN.',
  'Sí incumple la 2FN.'],
 'Normalización de bases de datos')

Q('BD-04','bd','medio','comprender',
 'En la tabla EMPLEADO(id, dependencia_id, nombre_dependencia), nombre_dependencia depende de dependencia_id, que a su vez depende de id. Esta situación es una dependencia',
 ['parcial, que viola la 2FN.','transitiva, que viola la 3FN.','multivaluada, que viola la 4FN.','funcional completa, que es correcta.'],
 1,
 ['La llave es simple, no hay dependencias parciales.',
  'Correcta. Se corrige separando DEPENDENCIA(dependencia_id, nombre_dependencia).',
  'No hay atributos multivaluados.',
  'Genera redundancia y anomalías de actualización.'],
 'Normalización – 3FN')

Q('BD-05','bd','medio','comprender',
 'Durante una transferencia que debita una cuenta y acredita otra, el sistema falla después del débito. Para que no quede la operación a medias, el motor debe garantizar la propiedad ACID de',
 ['atomicidad.','aislamiento.','durabilidad.','consistencia de lectura.'],
 0,
 ['Correcta. La atomicidad asegura que la transacción se ejecute completa o no se ejecute (rollback).',
  'El aislamiento evita interferencias entre transacciones concurrentes.',
  'La durabilidad garantiza la persistencia de lo confirmado.',
  'No es la propiedad que evita la operación parcial.'],
 'Transacciones – ACID')

Q('BD-06','bd','alto','aplicar',
 'Un formulario web construye la consulta concatenando el texto que escribe el usuario: "SELECT * FROM quejas WHERE id = " + entrada. La medida más efectiva para prevenir la inyección SQL es',
 ['ocultar los mensajes de error.','usar consultas parametrizadas (sentencias preparadas) y aplicar mínimo privilegio a la cuenta de base de datos.','cifrar la base de datos.','limitar la longitud del campo a 10 caracteres.'],
 1,
 ['Reduce información al atacante, pero no evita la inyección.',
  'Correcta. Los parámetros separan código y datos; el mínimo privilegio limita el impacto.',
  'El cifrado en reposo no evita consultas maliciosas.',
  'Las cargas maliciosas pueden ser cortas.'],
 'OWASP – Inyección SQL')

Q('BD-07','bd','medio','comprender',
 'Crear un índice sobre la columna NIT de una tabla de contratistas con millones de registros tiene como efecto principal',
 ['acelerar las consultas que filtran por NIT, a costa de más espacio y de inserciones y actualizaciones algo más lentas.','acelerar todas las operaciones sin ningún costo.','garantizar que no haya NIT duplicados en todos los casos.','cifrar la columna NIT.'],
 0,
 ['Correcta. Es un compromiso entre lectura y escritura.',
  'Los índices tienen costos de almacenamiento y mantenimiento.',
  'Solo un índice o restricción UNIQUE evita duplicados.',
  'Un índice no cifra.'],
 'Optimización de bases de datos')

Q('BD-08','bd','alto','analizar',
 'Para detectar redes de contratistas relacionados (socios comunes, representantes legales, direcciones compartidas) y recorrer relaciones de varios niveles, el modelo de base de datos más apropiado es',
 ['clave-valor.','orientado a grafos.','columnar para series de tiempo.','hoja de cálculo.'],
 1,
 ['No representa relaciones complejas.',
  'Correcta. Las bases de grafos modelan nodos y aristas y consultan caminos de varios saltos de forma eficiente.',
  'Optimizado para agregaciones, no para relaciones.',
  'No es una base de datos para este propósito.'],
 'Bases de datos NoSQL')

Q('BD-09','bd','medio','comprender',
 'En el plan de continuidad de un sistema se define que no puede perderse más de una hora de datos y que debe restablecerse en un máximo de cuatro horas. Estos valores corresponden, respectivamente, a',
 ['RTO y RPO.','RPO y RTO.','SLA y KPI.','MTBF y MTTR.'],
 1,
 ['Están invertidos.',
  'Correcta. RPO: punto máximo tolerable de pérdida de datos; RTO: tiempo máximo de recuperación del servicio.',
  'No corresponden a esas definiciones.',
  'Son métricas de confiabilidad de equipos.'],
 'Continuidad del negocio')

Q('BD-10','bd','medio','comprender',
 'Una restricción de llave foránea entre CONTRATO.entidad_id y ENTIDAD.id garantiza',
 ['que cada contrato tenga un valor positivo.','la integridad referencial: no pueden existir contratos asociados a entidades inexistentes.','que no haya entidades sin contratos.','que las consultas sean más rápidas.'],
 1,
 ['Eso lo haría una restricción CHECK.',
  'Correcta.',
  'Puede haber entidades sin contratos.',
  'No es su propósito.'],
 'Modelo relacional – integridad referencial')

Q('BD-11','bd','alto','analizar',
 'Según el teorema CAP, ante una partición de red un sistema distribuido debe escoger entre',
 ['costo y rendimiento.','consistencia y disponibilidad.','atomicidad y durabilidad.','seguridad y usabilidad.'],
 1,
 ['No son las propiedades del teorema.',
  'Correcta. CAP: consistencia, disponibilidad y tolerancia a particiones; con partición, se privilegia C o A.',
  'Son propiedades ACID.',
  'No corresponde.'],
 'Teorema CAP')

/* ---------- Transparencia, gobierno y datos abiertos ---------- */
Q('TRA-01','transparencia','medio','comprender',
 'Según la Ley 1712 de 2014, la información cuyo acceso puede negarse por daño a derechos de personas naturales o jurídicas (intimidad, vida, salud, secretos comerciales) se denomina',
 ['información pública reservada.','información pública clasificada.','información pública de libre acceso.','información confidencial de Estado.'],
 1,
 ['La reservada protege intereses públicos (defensa, seguridad nacional, relaciones internacionales, etc.).',
  'Correcta. Art. 18 Ley 1712 de 2014.',
  'Es lo contrario.',
  'No es una categoría de la ley.'],
 'Ley 1712 de 2014, arts. 6, 18 y 19')

Q('TRA-02','transparencia','medio','recordar',
 'La reserva de información pública por razones de interés público tiene una duración máxima de',
 ['5 años.','10 años.','15 años.','30 años.'],
 2,
 ['No corresponde.','No corresponde.','Correcta. Art. 22 Ley 1712 de 2014.','No corresponde.'],
 'Ley 1712 de 2014, art. 22')

Q('TRA-03','transparencia','alto','analizar',
 'Una entidad niega una solicitud de acceso argumentando genéricamente que «la información es sensible». Según la Ley de Transparencia, esta negativa es',
 ['válida, porque basta con invocar la sensibilidad.','inválida, porque la entidad tiene la carga de probar que la información está amparada por una excepción legal y demostrar el daño que causaría su divulgación (prueba de daño).','válida si la entidad es un organismo de control.','inválida solo si el solicitante demuestra interés legítimo.'],
 1,
 ['Una justificación genérica no basta.',
  'Correcta. Art. 28 Ley 1712: la carga de la prueba recae en el sujeto obligado; además debe motivarse con la norma que establece la excepción.',
  'Los organismos de control también son sujetos obligados.',
  'No se exige demostrar interés.'],
 'Ley 1712 de 2014, arts. 25 a 28')

Q('TRA-04','transparencia','alto','aplicar',
 'Un solicitante recibe respuesta negativa porque la entidad invocó la reserva legal. El peticionario insiste en obtener la información. El trámite procedente es que',
 ['la misma entidad resuelva la insistencia en un plazo libre.','la entidad remita la documentación al juez o tribunal administrativo competente para que decida si se acepta o no la petición formulada.','el peticionario interponga acción popular.','la PGN decida definitivamente sobre la reserva.'],
 1,
 ['No es la entidad quien decide la insistencia.',
  'Correcta. Art. 26 CPACA (sustituido por Ley 1755): recurso de insistencia, resuelto por el juez o tribunal en 10 días.',
  'No es el mecanismo previsto.',
  'La decisión es judicial.'],
 'Ley 1755 de 2015, art. 26; Ley 1712 de 2014, art. 27')

Q('TRA-05','transparencia','medio','aplicar',
 'La dirección va a publicar un conjunto de datos sobre peticiones atendidas. El formato que cumple mejor el concepto de dato abierto es',
 ['un PDF escaneado de una tabla impresa.','un archivo CSV con diccionario de datos y metadatos, publicado en datos.gov.co con licencia de uso libre.','una imagen PNG de un gráfico.','un archivo de Excel protegido con contraseña.'],
 1,
 ['No es procesable por máquina.',
  'Correcta. La Ley 1712 (art. 6) define datos abiertos como datos primarios, sin procesar, en formatos estándar e interoperables, de libre acceso y reutilización.',
  'Es un dato procesado y no reutilizable.',
  'Restringe el acceso.'],
 'Ley 1712 de 2014, art. 6; Res. MinTIC 1519 de 2020')

Q('TRA-06','transparencia','medio','recordar',
 'Son instrumentos de gestión de la información pública previstos en la Ley 1712 de 2014',
 ['el registro de activos de información, el índice de información clasificada y reservada y el esquema de publicación de información.','el plan anual de adquisiciones, el presupuesto y el plan de acción.','las tablas de retención, la ventanilla única y el SECOP.','el MIPG, el FURAG y el MECI.'],
 0,
 ['Correcta. Arts. 13, 20 y 12 de la Ley 1712, junto con el Programa de Gestión Documental (art. 15).',
  'Son instrumentos de planeación y presupuesto.',
  'Mezcla instrumentos archivísticos y de contratación.',
  'Son instrumentos de gestión institucional.'],
 'Ley 1712 de 2014, arts. 12, 13, 15 y 20')

Q('TRA-07','transparencia','medio','comprender',
 'Cuando una entidad publica de manera proactiva en su sitio web su estructura, presupuesto, contratación y datos abiertos, cumple la dimensión de transparencia',
 ['pasiva.','activa.','reactiva.','focalizada en el peticionario.'],
 1,
 ['La pasiva es la respuesta a solicitudes de acceso.',
  'Correcta. La transparencia activa es la publicación de información sin que medie solicitud (arts. 9 a 11 Ley 1712).',
  'No es una categoría legal.',
  'No corresponde.'],
 'Ley 1712 de 2014, arts. 9 a 11')

Q('TRA-08','transparencia','medio','aplicar',
 'Un ciudadano solicita copia de un conjunto de datos de 500 MB y pide que se le envíe por correo electrónico. En relación con el costo, la entidad',
 ['puede cobrar un arancel por el valor de la información.','no puede cobrar, salvo los costos de reproducción, que no aplican si la información se entrega por medio electrónico.','debe cobrar según el número de registros.','puede negar la solicitud por el tamaño del archivo.'],
 1,
 ['El principio de gratuidad prohíbe cobrar por la información.',
  'Correcta. Art. 3 y 26 Ley 1712: gratuidad; solo costos de reproducción; envío electrónico sin costo.',
  'No existe ese cobro.',
  'El tamaño no es causal de rechazo; deben buscarse medios para entregarla.'],
 'Ley 1712 de 2014, arts. 3 y 26')

Q('TRA-09','transparencia','bajo','recordar',
 'El Índice de Transparencia y Acceso a la Información Pública (ITA), que mide el cumplimiento de la Ley 1712 de 2014 por parte de los sujetos obligados, es administrado por',
 ['el Departamento Administrativo de la Función Pública.','la Procuraduría General de la Nación.','Transparencia por Colombia.','el Archivo General de la Nación.'],
 1,
 ['El DAFP administra el FURAG.',
  'Correcta. Es una herramienta de la PGN en ejercicio del art. 23 de la Ley 1712.',
  'Es una ONG que tiene otros índices.',
  'No corresponde.'],
 'Ley 1712 de 2014, art. 23')

Q('TRA-10','transparencia','alto','analizar',
 'La política pública que estableció lineamientos para aumentar el aprovechamiento de datos en Colombia (explotación de datos – Big Data), con el fin de generar valor social y económico, es',
 ['el CONPES 3920 de 2018.','el CONPES 3654 de 2010.','la Ley 1581 de 2012.','el Decreto 1499 de 2017.'],
 0,
 ['Correcta. CONPES 3920 de 2018: Política Nacional de Explotación de Datos (Big Data).',
  'El CONPES 3654 de 2010 trata la rendición de cuentas.',
  'Es la ley de protección de datos personales.',
  'Es el decreto del MIPG.'],
 'CONPES 3920 de 2018')

Q('TRA-11','transparencia','medio','comprender',
 'La Resolución 1519 de 2020 del Ministerio TIC define',
 ['el régimen sancionatorio de protección de datos.','los estándares y directrices para publicar información en sitios web, incluidos criterios de accesibilidad web, seguridad digital y datos abiertos.','la tabla de honorarios de contratistas TIC.','la estructura de la PGN.'],
 1,
 ['No corresponde.',
  'Correcta.',
  'No corresponde.',
  'No corresponde.'],
 'Resolución MinTIC 1519 de 2020')

Q('TRA-12','transparencia','alto','analizar',
 'Al publicar en datos abiertos una base de quejas con municipio, fecha, edad exacta, cargo y dependencia del quejoso, existe un riesgo de reidentificación en municipios pequeños. La medida más adecuada es',
 ['no publicar ningún dato.','aplicar técnicas de anonimización, como generalizar la edad en rangos y agregar categorías poco frecuentes, evaluando el riesgo de reidentificación antes de publicar.','publicar los datos tal cual, porque son información pública.','reemplazar el municipio por su código DANE.'],
 1,
 ['La máxima publicidad exige publicar lo que no esté amparado por excepción.',
  'Correcta. Equilibra transparencia y protección de datos (información clasificada, art. 18 Ley 1712).',
  'Los cuasi-identificadores combinados permiten reidentificar.',
  'El código DANE identifica igualmente al municipio.'],
 'Ley 1712 de 2014, art. 18; Ley 1581 de 2012')

/* ---------- Contratación estatal ---------- */
Q('CTR-01','contratacion','medio','aplicar',
 'La PGN requiere contratar una consultoría para diseñar la arquitectura de su plataforma de analítica de datos. La modalidad de selección que corresponde es',
 ['licitación pública.','concurso de méritos.','mínima cuantía.','contratación directa en todos los casos.'],
 1,
 ['La licitación es la regla general, pero la consultoría tiene modalidad propia.',
  'Correcta. Art. 2 num. 3 Ley 1150 de 2007: los servicios de consultoría (art. 32 num. 2 Ley 80) se seleccionan por concurso de méritos.',
  'Depende de la cuantía y no es la modalidad para consultoría.',
  'La contratación directa es excepcional y taxativa.'],
 'Ley 1150 de 2007, art. 2; Ley 80 de 1993, art. 32')

Q('CTR-02','contratacion','medio','recordar',
 'La modalidad de mínima cuantía se aplica a contratos cuyo valor no exceda',
 ['el 10 % de la menor cuantía de la entidad, independientemente de su objeto.','100 SMMLV en todos los casos.','el 50 % de la menor cuantía.','1.000 SMMLV.'],
 0,
 ['Correcta. Art. 2 num. 5 Ley 1150 de 2007, adicionado por el art. 94 Ley 1474 de 2011.',
  'El valor depende del presupuesto de cada entidad.',
  'No corresponde.',
  'No corresponde.'],
 'Ley 1150 de 2007, art. 2 num. 5; Ley 1474 de 2011, art. 94')

Q('CTR-03','contratacion','alto','analizar',
 'Un contratista de obra incumple gravemente sus obligaciones, de forma que afecta la ejecución y puede conducir a su paralización. La medida excepcional que permite a la entidad dar por terminado el contrato y ordenar su liquidación es',
 ['la terminación por mutuo acuerdo.','la declaratoria de caducidad.','la interpretación unilateral.','la cesión del contrato.'],
 1,
 ['Requiere voluntad de ambas partes.',
  'Correcta. Art. 18 Ley 80 de 1993; además genera inhabilidad para contratar.',
  'La interpretación unilateral resuelve discrepancias sobre cláusulas.',
  'La cesión no es una sanción.'],
 'Ley 80 de 1993, arts. 14 y 18')

Q('CTR-04','contratacion','alto','analizar',
 'Una entidad debe hacer seguimiento a un contrato de desarrollo de software de alta complejidad técnica que exige conocimientos especializados con los que no cuenta su personal. Según la Ley 1474 de 2011, lo procedente es',
 ['designar como supervisor a cualquier funcionario de planta.','contratar una interventoría, ejercida por una persona natural o jurídica externa con conocimiento especializado.','dejar el seguimiento al mismo contratista.','no hacer seguimiento por tratarse de un contrato de tracto sucesivo.'],
 1,
 ['La supervisión la ejerce la entidad cuando no se requieren conocimientos especializados.',
  'Correcta. Art. 83 Ley 1474: la interventoría procede cuando el seguimiento supone conocimiento especializado o la complejidad o extensión lo justifiquen.',
  'Genera conflicto de intereses.',
  'Todo contrato requiere vigilancia.'],
 'Ley 1474 de 2011, arts. 83 y 84')

Q('CTR-05','contratacion','medio','aplicar',
 'Una entidad requiere contratar a una persona natural para prestar servicios profesionales de análisis de datos, que no pueden realizarse con personal de planta. La modalidad aplicable es',
 ['licitación pública.','contratación directa, verificando la idoneidad y experiencia del contratista.','selección abreviada por subasta inversa.','concurso de méritos abierto.'],
 1,
 ['No es la modalidad para este objeto.',
  'Correcta. Art. 2 num. 4 lit. h) Ley 1150 de 2007 y Decreto 1082 de 2015.',
  'La subasta es para bienes y servicios de características técnicas uniformes.',
  'Los servicios profesionales no se tramitan por concurso de méritos.'],
 'Ley 1150 de 2007, art. 2 num. 4 lit. h); Decreto 1082 de 2015')

Q('CTR-06','contratacion','medio','comprender',
 'Para adquirir licencias de software de características técnicas uniformes cubiertas por un Acuerdo Marco de Precios vigente de Colombia Compra Eficiente, una entidad sometida al Estatuto General de Contratación debe',
 ['adelantar una licitación pública.','adquirirlas a través de la Tienda Virtual del Estado Colombiano, al amparo del Acuerdo Marco.','contratar directamente al fabricante.','abrir un concurso de méritos.'],
 1,
 ['No es necesario cuando hay Acuerdo Marco vigente.',
  'Correcta. El parágrafo 5 del art. 2 de la Ley 1150 de 2007, modificado por el art. 41 de la Ley 2069 de 2020, hizo obligatorio el uso de los Acuerdos Marco para las entidades sometidas al Estatuto General de Contratación (antes solo para la Rama Ejecutiva nacional).',
  'No es la vía.',
  'No aplica a bienes uniformes.'],
 'Ley 1150 de 2007, art. 2 parágrafo 5; Ley 2069 de 2020, art. 41; Decreto 1082 de 2015')

Q('CTR-07','contratacion','alto','analizar',
 'Una entidad abre un proceso de selección sin haber elaborado estudios de mercado ni análisis del sector, lo que provoca adiciones y prórrogas sucesivas. El principio principalmente vulnerado es el de',
 ['planeación, que exige estudios previos serios antes de contratar.','publicidad.','buena fe precontractual del oferente.','libre concurrencia.'],
 0,
 ['Correcta. El principio de planeación, derivado de los arts. 25 y 26 de la Ley 80 y desarrollado jurisprudencialmente, exige estudios previos y análisis del sector.',
  'La publicidad no se afectó.',
  'El incumplimiento es de la entidad.',
  'No se limitó la participación.'],
 'Ley 80 de 1993, arts. 25 y 26; Decreto 1082 de 2015')

Q('CTR-08','contratacion','medio','aplicar',
 'Durante la ejecución, a un contratista le sobreviene una inhabilidad. Según la Ley 80 de 1993, debe',
 ['continuar la ejecución sin consecuencias.','ceder el contrato previa autorización escrita de la entidad o, si no es posible, renunciar a su ejecución.','solicitar la caducidad del contrato.','pedir una adición presupuestal.'],
 1,
 ['La inhabilidad sobreviniente obliga a actuar.',
  'Correcta. Art. 9 Ley 80 de 1993.',
  'La caducidad la declara la entidad por incumplimiento.',
  'No tiene relación.'],
 'Ley 80 de 1993, art. 9')

Q('CTR-09','contratacion','alto','aplicar',
 'Terminado un contrato, las partes no acuerdan la liquidación bilateral dentro del término previsto. Según el artículo 11 de la Ley 1150 de 2007, la entidad',
 ['pierde toda competencia para liquidar.','puede liquidar unilateralmente dentro de los dos meses siguientes y, si no lo hace, aún puede liquidar dentro de los dos años siguientes, de mutuo acuerdo o unilateralmente.','debe liquidar ante la Contraloría.','debe archivar el contrato sin liquidación.'],
 1,
 ['La competencia se conserva dentro de los plazos legales.',
  'Correcta. Art. 11 Ley 1150 de 2007 (liquidación bilateral en el plazo del pliego o 4 meses; unilateral en 2 meses; y luego dentro de los 2 años siguientes).',
  'La Contraloría no liquida contratos de otras entidades.',
  'La liquidación es obligatoria en los contratos de tracto sucesivo.'],
 'Ley 1150 de 2007, art. 11')

Q('CTR-10','contratacion','medio','comprender',
 'Las cláusulas excepcionales al derecho común previstas en el artículo 14 de la Ley 80 de 1993 son',
 ['multas, cláusula penal y garantías.','interpretación, modificación y terminación unilaterales, y caducidad.','cesión, subcontratación y adición.','liquidación, reversión y prórroga.'],
 1,
 ['No son las cláusulas excepcionales del art. 14.',
  'Correcta. A ellas se suma la cláusula de reversión en contratos de explotación y concesión de bienes del Estado.',
  'No corresponde.',
  'Incluye figuras que no son excepcionales.'],
 'Ley 80 de 1993, arts. 14 a 18')

Q('CTR-11','contratacion','medio','recordar',
 'La plataforma transaccional en la que las entidades estatales deben adelantar y publicar en línea su gestión contractual es',
 ['el SIGEP.','el SECOP II.','el SIIF Nación.','el SUIT.'],
 1,
 ['El SIGEP es el sistema de información de empleo público.',
  'Correcta. Administrado por Colombia Compra Eficiente.',
  'El SIIF es el sistema financiero.',
  'El SUIT es el sistema de trámites.'],
 'Colombia Compra Eficiente; Decreto 1082 de 2015')

Q('CTR-12','contratacion','alto','analizar',
 'Un analista de la PGN encuentra que una entidad territorial adjudica sistemáticamente procesos con un solo oferente, usando pliegos con requisitos de experiencia desproporcionados. Esta práctica afecta principalmente',
 ['el principio de selección objetiva y la pluralidad de oferentes, y es un indicador de riesgo de corrupción.','solo el principio de economía.','el régimen de garantías.','el principio de anualidad presupuestal.'],
 0,
 ['Correcta. Ley 1150, art. 5; además, los documentos tipo (Ley 2022 de 2020) buscan precisamente evitar pliegos «sastre».',
  'La economía no es el principio más afectado.',
  'No se relaciona con las garantías.',
  'No es un problema presupuestal.'],
 'Ley 1150 de 2007, art. 5; Ley 2022 de 2020')
