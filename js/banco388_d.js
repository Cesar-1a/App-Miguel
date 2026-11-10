/* Convocatoria 388 – NÚCLEO ESPECÍFICO (D): formulación y evaluación de proyectos; adecuación y reestructuración de sedes. */

/* ---------- Formulación y evaluación de proyectos ---------- */
Q('PRY-01','proyectos','alto','aplicar',
 'Un proyecto de eficiencia energética para una sede cuesta hoy 100 millones y genera ahorros de 60 millones al final de cada uno de los dos próximos años. Con una tasa de descuento del 10 %, el VPN aproximado es',
 ['20 millones, porque los ahorros totales superan la inversión en esa cifra.','4,1 millones, por lo que el proyecto es financieramente viable.','−4,1 millones, por lo que el proyecto no es viable.','0, porque la TIR es exactamente igual a la tasa de descuento.'],
 1,
 ['Ignora el valor del dinero en el tiempo.','Correcta. 60/1,1 + 60/1,21 − 100 ≈ 54,55 + 49,59 − 100 ≈ 4,13.','El signo es positivo.','La TIR es mayor que el 10 % porque el VPN es positivo.'],
 'Evaluación financiera – VPN')

Q('PRY-02','proyectos','medio','comprender',
 'Si el VPN de un proyecto, calculado con la tasa de descuento pertinente, es positivo, se puede afirmar que',
 ['la TIR del proyecto es mayor que la tasa de descuento utilizada.','la TIR es necesariamente negativa.','el periodo de recuperación es inferior a un año.','la relación beneficio/costo es menor que uno.'],
 0,
 ['Correcta (para flujos convencionales).','No corresponde.','No se deduce del VPN.','Sería mayor que uno.'],
 'Evaluación de proyectos')

Q('PRY-03','proyectos','bajo','recordar',
 'La metodología que utiliza el Departamento Nacional de Planeación para la formulación y registro de proyectos de inversión pública es',
 ['la Metodología General Ajustada (MGA).','la metodología CRISP-DM.','el ciclo PHVA de la ISO 9001.','el método de valoración de puestos de trabajo.'],
 0,
 ['Correcta.','Es una metodología de minería de datos.','Es un ciclo de mejora continua.','No corresponde.'],
 'DNP – MGA')

Q('PRY-04','proyectos','medio','comprender',
 'En la matriz de marco lógico, la columna que identifica los factores externos que deben ocurrir para el éxito del proyecto y que están fuera del control del gerente es la de',
 ['supuestos.','indicadores.','medios de verificación.','resumen narrativo.'],
 0,
 ['Correcta.','Miden el logro de cada nivel.','Indican las fuentes de información.','Describe fin, propósito, componentes y actividades.'],
 'Metodología del marco lógico')

Q('PRY-05','proyectos','alto','aplicar',
 'En el cronograma de la remodelación de una sede, la actividad «instalaciones eléctricas» tiene holgura total cero. Esto significa que',
 ['puede retrasarse sin afectar la fecha final, porque no tiene predecesoras.','pertenece a la ruta crítica, de modo que cualquier retraso en ella retrasa la terminación del proyecto.','es la actividad de menor costo del proyecto.','debe ejecutarse al final del proyecto.'],
 1,
 ['Es lo contrario.','Correcta. Método de la ruta crítica (CPM).','La holgura no se relaciona con el costo.','No se relaciona con su posición temporal.'],
 'Programación de proyectos – CPM')

Q('PRY-06','proyectos','medio','aplicar',
 'En un presupuesto de obra, el componente AIU que se aplica sobre los costos directos corresponde a',
 ['administración, imprevistos y utilidad del contratista.','almacenamiento, instalación y uso de equipos.','anticipo, interventoría y utilidad.','amortización, impuestos y unidades.'],
 0,
 ['Correcta.','No corresponde.','La interventoría es otro contrato.','No corresponde.'],
 'Presupuestos de obra')

Q('PRY-07','proyectos','alto','aplicar',
 'Los costos directos de una obra suman 500 millones y el AIU pactado es del 25 % (A 15 %, I 5 %, U 5 %). Si el IVA se liquida sobre la utilidad (19 %), el valor del IVA es aproximadamente',
 ['4,75 millones.','23,75 millones.','95 millones.','118,75 millones.'],
 0,
 ['Correcta. Utilidad = 5 % × 500 = 25; IVA = 19 % × 25 = 4,75.','Aplica el IVA sobre todo el AIU.','Aplica el IVA sobre todos los costos directos.','No corresponde.'],
 'Decreto 1625 de 2016, art. 1.3.1.7.9 (compila el art. 3 del Decreto 1372 de 1992): en la construcción de inmuebles el IVA se causa sobre los honorarios o, si no se pactan, sobre la utilidad del constructor. Ojo: la Ley 21 de 1992, art. 100, excluye de IVA ciertos contratos de obra pública con entidades territoriales.')

Q('PRY-08','proyectos','medio','comprender',
 'El análisis de precios unitarios (APU) de un ítem de obra descompone su costo en',
 ['materiales, equipo y herramienta, mano de obra y transporte.','administración, imprevistos y utilidad.','licencias, impuestos y seguros.','costos de interventoría y supervisión.'],
 0,
 ['Correcta.','Es el AIU, aplicado sobre los costos directos.','No corresponde.','No hacen parte del APU.'],
 'Presupuestos de obra')

Q('PRY-09','proyectos','alto','analizar',
 'Para atender el hacinamiento de una sede, se comparan tres alternativas (ampliar, arrendar otra sede o redistribuir espacios con trabajo híbrido) que tienen beneficios similares. El criterio de evaluación más adecuado es',
 ['elegir la alternativa con mayor inversión inicial, porque demuestra más compromiso institucional.','un análisis costo-eficiencia que compare el valor presente de los costos para lograr el mismo resultado.','elegir la que proponga el contratista con más experiencia.','elegir la alternativa más rápida, sin considerar costos.'],
 1,
 ['No es un criterio técnico.','Correcta.','No es un criterio de evaluación de alternativas.','Omite la eficiencia.'],
 'Evaluación de proyectos – costo-eficiencia')

Q('PRY-10','proyectos','medio','comprender',
 'En el árbol de problemas de la MGA, las raíces del árbol representan',
 ['las causas del problema central.','los efectos del problema central.','los objetivos del proyecto.','los indicadores de producto.'],
 0,
 ['Correcta.','Los efectos son las ramas.','Se construyen en el árbol de objetivos.','No corresponden.'],
 'DNP – MGA')

Q('PRY-11','proyectos','medio','aplicar',
 'La curva S de un proyecto de obra permite',
 ['comparar el avance físico o financiero acumulado programado frente al ejecutado a lo largo del tiempo.','calcular el índice de construcción del predio.','definir la resistencia del concreto.','clasificar los suelos.'],
 0,
 ['Correcta.','Es una norma urbanística.','Es un parámetro de diseño.','Es un procedimiento geotécnico.'],
 'Control de proyectos')

Q('PRY-12','proyectos','alto','analizar',
 'Una obra con presupuesto de 1.000 millones ha ejecutado trabajos valorados en 400 millones (valor ganado), cuando según el cronograma debía llevar 500 millones (valor planeado), y ha gastado 450 millones (costo real). Es correcto afirmar que',
 ['está adelantada y por debajo del presupuesto.','está atrasada (SPI = 0,8) y con sobrecosto (CPI ≈ 0,89).','está atrasada pero con ahorro, porque gastó menos de lo planeado.','está al día y dentro del presupuesto.'],
 1,
 ['Ambos índices son menores que uno.','Correcta. SPI = VG/VP = 400/500; CPI = VG/CR = 400/450.','Gastar menos de lo planeado no implica ahorro si se ejecutó aún menos.','No corresponde.'],
 'Gestión del valor ganado')

/* ---------- Adecuación y reestructuración de sedes ---------- */
Q('SED-01','sedes','medio','aplicar',
 'El contratista de una adecuación debe instalar cielos rasos a 3,5 m de altura. Antes de iniciar, en materia de seguridad y salud en el trabajo, debe garantizarse',
 ['únicamente que los trabajadores tengan casco, porque la altura es inferior a 5 m.','el cumplimiento del reglamento de trabajo en alturas (capacitación certificada, permisos, sistemas de protección contra caídas), por existir riesgo de caída mayor a 2,0 m.','que la entidad asuma la afiliación a riesgos laborales de los trabajadores del contratista.','que los trabajos se hagan de noche para no exponer a los servidores.'],
 1,
 ['Desconoce el reglamento.','Correcta. Resolución 4272 de 2021 del Ministerio del Trabajo.','La afiliación corresponde al contratista empleador.','No es la medida de seguridad.'],
 'Resolución 4272 de 2021')

Q('SED-02','sedes','medio','recordar',
 'El sistema de gestión de la seguridad y salud en el trabajo (SG-SST) está regulado principalmente en',
 ['el Decreto 1072 de 2015 y la Resolución 0312 de 2019 (estándares mínimos).','la Ley 80 de 1993 y el Decreto 1082 de 2015.','la Ley 594 de 2000 y sus acuerdos.','la Ley 1712 de 2014.'],
 0,
 ['Correcta.','Son normas de contratación.','Son normas de archivo.','Es la ley de transparencia.'],
 'Decreto 1072 de 2015; Resolución 0312 de 2019')

Q('SED-03','sedes','alto','aplicar',
 'Al recibir la adecuación eléctrica de una sede, la entidad debe exigir que la instalación cuente con',
 ['la certificación de conformidad con el RETIE, expedida conforme al reglamento técnico de instalaciones eléctricas.','solo la factura de los materiales eléctricos comprados.','la aprobación del vigilante de la sede.','un concepto del área de sistemas de la entidad.'],
 0,
 ['Correcta. Reglamento Técnico de Instalaciones Eléctricas (Ministerio de Minas y Energía).','No acredita la conformidad técnica.','No es competente.','No es competente.'],
 'RETIE')

Q('SED-04','sedes','alto','analizar',
 'Se debe remodelar una sede que seguirá funcionando y atendiendo público. Para minimizar riesgos y afectaciones, el plan de obra debe incluir',
 ['la ejecución de todos los frentes al mismo tiempo para terminar más rápido.','una programación por fases, aislamiento de zonas de obra, rutas de evacuación alternas, control de polvo y ruido, y coordinación con la dependencia y con SST.','el cierre de la sede sin informar a los usuarios, para evitar reclamos.','la suspensión del plan de emergencias durante la obra.'],
 1,
 ['Aumenta el riesgo para usuarios y servidores.','Correcta.','Vulnera los derechos de los usuarios.','Debe actualizarse, no suspenderse.'],
 'Gestión de obras en edificios ocupados; SG-SST')

Q('SED-05','sedes','medio','comprender',
 'El reglamento técnico que establece requisitos de iluminación y alumbrado público en Colombia se conoce como',
 ['RETILAP.','RETIE.','RAS.','NSR-10.'],
 0,
 ['Correcta.','Instalaciones eléctricas.','Agua potable y saneamiento básico.','Construcción sismo resistente.'],
 'RETILAP – Ministerio de Minas y Energía')

Q('SED-06','sedes','medio','aplicar',
 'Al adecuar una sede que atiende público, la señalización de rutas de evacuación y salidas de emergencia debe',
 ['ubicarse solo en la recepción, para no afectar la estética de las oficinas.','ser visible, continua hasta la salida segura, fotoluminiscente o iluminada, y estar articulada con el plan de emergencias.','instalarse únicamente cuando lo exija el cuerpo de bomberos.','ser igual a la de cualquier aviso comercial.'],
 1,
 ['Insuficiente.','Correcta. NSR-10 Título K; plan de emergencias (Decreto 1072 de 2015).','Es una obligación permanente.','Debe cumplir estándares técnicos.'],
 'NSR-10, Título K; Decreto 1072 de 2015')

Q('SED-07','sedes','alto','analizar',
 'En la adecuación de una sede, el contratista propone reutilizar la red hidrosanitaria existente de 40 años sin revisarla, para reducir costos. El asesor debe',
 ['aceptarlo, porque las redes enterradas no se deterioran.','exigir una inspección y pruebas de la red (presión, estanqueidad) antes de decidir si se reutiliza, repara o reemplaza.','aceptarlo si el contratista otorga una carta de compromiso.','rechazar todo el proyecto de adecuación.'],
 1,
 ['Las redes antiguas suelen presentar deterioro.','Correcta.','No sustituye la verificación técnica.','Desproporcionado.'],
 'Buenas prácticas de mantenimiento de edificaciones')

Q('SED-08','sedes','medio','comprender',
 'Durante una obra, el contratista genera escombros (residuos de construcción y demolición). Su manejo debe',
 ['hacerse de cualquier forma, siempre que se retiren de la sede.','realizarse conforme a la normativa ambiental de RCD, con disposición en sitios autorizados y soportes del gestor.','quemarse en el lote para reducir el volumen.','depositarse en la vía pública para que los recoja el servicio de aseo.'],
 1,
 ['Puede generar sanciones ambientales.','Correcta. Resolución del Ministerio de Ambiente sobre RCD.','Prohibido.','Prohibido.'],
 'Normativa ambiental sobre residuos de construcción y demolición')

Q('SED-09','sedes','alto','aplicar',
 'Se proyecta redistribuir una planta de oficinas con nuevas divisiones. Además del diseño arquitectónico, deben revisarse para no afectar la seguridad',
 ['solo los colores de las divisiones.','los recorridos y anchos de evacuación, la detección y extinción de incendios, la ventilación y la iluminación de los nuevos espacios.','únicamente el número de puestos de trabajo.','el inventario de bienes muebles de la dependencia.'],
 1,
 ['No es un aspecto de seguridad.','Correcta. NSR-10 Títulos J y K; RETILAP.','No es suficiente.','No es un aspecto de seguridad.'],
 'NSR-10, Títulos J y K')

Q('SED-10','sedes','medio','aplicar',
 'Para priorizar las adecuaciones de 30 sedes regionales con un presupuesto limitado, la herramienta más útil es',
 ['atender primero las sedes cuyos jefes reclamen con más insistencia.','un diagnóstico de condiciones físicas y de riesgo de cada sede, con criterios de priorización (seguridad, normativa, impacto en la atención) y un plan plurianual.','distribuir el presupuesto en partes iguales entre todas las sedes.','atender solo las sedes ubicadas en capitales.'],
 1,
 ['No es un criterio técnico.','Correcta.','No considera necesidades distintas.','Discriminatorio y no técnico.'],
 'Gestión de activos inmobiliarios')

Q('SED-11','sedes','alto','analizar',
 'El contratista de obra no tiene implementado su SG-SST y un trabajador sufre un accidente. Frente a la entidad contratante, es correcto afirmar que',
 ['no tiene ninguna responsabilidad, porque el trabajador no es su empleado.','debió verificar en la etapa contractual y durante la ejecución el cumplimiento del SG-SST del contratista, y puede tener responsabilidad solidaria según el caso.','debe pagar la incapacidad del trabajador directamente.','debe declarar la caducidad automáticamente.'],
 1,
 ['El contratante tiene deberes de verificación.','Correcta. Decreto 1072 de 2015 (contratación y SST) y Código Sustantivo del Trabajo, art. 34.','No es la regla.','La caducidad requiere procedimiento y causal.'],
 'Decreto 1072 de 2015; CST art. 34')

Q('SED-12','sedes','medio','comprender',
 'Una «reestructuración» de sede que implique redistribuir áreas y reforzar la estructura existente requiere, en materia urbanística,',
 ['ningún trámite, porque se trata del mismo inmueble.','licencia de construcción en las modalidades que correspondan (por ejemplo, modificación y reforzamiento estructural).','solo un aviso a la alcaldía local.','únicamente la aprobación del comité directivo de la entidad.'],
 1,
 ['Las intervenciones estructurales requieren licencia.','Correcta. Decreto 1077 de 2015.','No es suficiente.','No sustituye la licencia.'],
 'Decreto 1077 de 2015')
