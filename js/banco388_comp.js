/* Convocatoria 388 – Banco COMPORTAMENTAL (situaciones de un asesor de inmuebles y obras).
   Puntajes: 2 = máximo ajuste al nivel exigido, 1 = parcial, 0 = bajo. Opciones de longitud similar. */

/* ---- Responsabilidad con la organización (Nivel B) ---- */
C('C388-RES-01','responsabilidad',
 'Durante una visita a una sede regional, usted detecta goteras que no están en ningún plan de mantenimiento, aunque nadie las ha reportado. Ante esta situación, usted',
 ['registra el hallazgo, propone incluir la reparación en el plan de mantenimiento y sugiere un formato de reporte periódico para las regionales.',
  'informa verbalmente al coordinador de la sede para que él decida si reporta el daño a la División cuando lo considere necesario.',
  'termina la visita según lo programado, porque el objeto de la comisión era revisar otra obra y no las cubiertas de la sede.'],
 [2,1,0],
 ['Contribuye a los objetivos y propone una mejora del proceso (nivel B).','Comunica, pero sin asegurar la solución.','Se limita a la tarea asignada.'])

C('C388-RES-02','responsabilidad',
 'La entidad necesita liberar una sede arrendada antes de lo previsto y le piden apoyo, aunque usted lidera otro proyecto. Ante esta situación, usted',
 ['explica que su proyecto actual tiene prioridad y que no puede asumir más tareas sin afectar los compromisos que ya tiene con la dirección.',
  'reorganiza con su jefe las prioridades, elabora el plan de entrega del inmueble y deja definido quién atiende cada frente de su proyecto.',
  'acepta el apoyo y lo atiende en los ratos libres que le deje su proyecto principal, sin cambiar la programación de ninguno de los dos.'],
 [0,2,1],
 ['Prioriza su agenda sobre la necesidad institucional.','Asume el compromiso y organiza la respuesta.','Acepta, pero sin asegurar la oportunidad.'])

C('C388-RES-03','responsabilidad',
 'Un contrato de mantenimiento que usted supervisa cumple formalmente, pero los usuarios de la sede siguen quejándose de las fallas. Ante esta situación, usted',
 ['certifica el cumplimiento, porque el contratista hizo las actividades pactadas y las quejas obedecen a un mal uso de las instalaciones.',
  'analiza las quejas, identifica las causas recurrentes y propone ajustar las especificaciones del siguiente contrato para resolverlas.',
  'pide al contratista que atienda las quejas como favor adicional, aunque no estén incluidas en el alcance del contrato vigente.'],
 [0,2,1],
 ['Se queda en el cumplimiento formal.','Propone mejora continua orientada a los objetivos.','Busca solución informal, sin respaldo contractual.'])

C('C388-RES-04','responsabilidad',
 'Usted descubre que el inventario de inmuebles tiene datos desactualizados que se reportaron en el informe de gestión del año anterior. Ante esta situación, usted',
 ['corrige los datos en silencio para el próximo informe y evita mencionar el error, porque ya pasó el periodo de reporte anterior.',
  'informa a su jefe, corrige el inventario con soportes y propone un procedimiento de actualización periódica con responsables.',
  'deja una nota en el archivo indicando que los datos pueden tener errores, para que quien lo use los revise por su cuenta.'],
 [0,2,1],
 ['No asume la responsabilidad.','Asume el compromiso y mejora el proceso.','Advierte, pero sin corregir.'])

C('C388-RES-05','responsabilidad',
 'La dirección fija la meta de reducir los costos de arrendamiento. Usted no tiene esa meta asignada directamente. Ante esta situación, usted',
 ['espera a que la meta se distribuya formalmente entre los funcionarios y entonces ejecuta la parte que le corresponda.',
  'analiza los contratos de arrendamiento vigentes, identifica oportunidades (renegociación, consolidación de sedes) y las presenta a su jefe.',
  'comenta en las reuniones que la meta es difícil, aunque sigue atento a las instrucciones que se impartan sobre el tema.'],
 [1,2,0],
 ['Cumple cuando se le asigna.','Contribuye activamente a los objetivos institucionales.','No aporta al objetivo.'])

/* ---- Organización del trabajo (Nivel B) ---- */
C('C388-ORG-01','organizacion',
 'Usted coordina con dos profesionales los estudios previos de tres procesos de obra con fechas de cierre cercanas. Ante esta situación, usted',
 ['divide los procesos, asigna uno a cada profesional y se queda con el más complejo, revisando todo al final antes de radicar.',
  'define un cronograma con entregables, responsables y fechas de revisión intermedia, y hace seguimiento semanal al avance de cada proceso.',
  'trabaja en los tres procesos al tiempo, pidiendo a los profesionales apoyo puntual cuando usted lo necesite en cada caso.'],
 [1,2,0],
 ['Distribuye, pero sin seguimiento oportuno.','Organiza con calidad, oportunidad y seguimiento de las labores de los demás.','Sin organización del equipo.'])

C('C388-ORG-02','organizacion',
 'En la misma semana debe entregar un concepto técnico a la Secretaría General, responder un derecho de petición y asistir a un comité de obra. Ante esta situación, usted',
 ['atiende primero el comité de obra porque es presencial, y deja el concepto y la petición para cuando regrese a la oficina.',
  'prioriza según vencimientos e impacto, agenda los tiempos de cada tarea y verifica que la petición se responda dentro del término legal.',
  'pide prórroga para el concepto y para la petición, para poder dedicarse con calma al comité de obra durante la semana.'],
 [0,2,1],
 ['Puede incumplir términos legales.','Organiza según oportunidad y verifica cumplimiento.','Traslada la carga sin necesidad.'])

C('C388-ORG-03','organizacion',
 'Al revisar el informe mensual de la interventoría, usted encuentra que las cantidades reportadas no coinciden con el acta parcial. Ante esta situación, usted',
 ['aprueba el informe y pide que la diferencia se ajuste en el acta del mes siguiente, para no retrasar el pago al contratista.',
  'solicita a la interventoría aclarar la diferencia con los soportes, verifica en obra si es necesario y establece una lista de chequeo para los próximos informes.',
  'devuelve el informe a la interventoría indicando que tiene errores, sin precisar cuáles, para que lo revise completo.'],
 [0,2,1],
 ['Omite el control.','Verifica las labores de otros e implementa herramientas de control.','Señala el error sin orientar la corrección.'])

C('C388-ORG-04','organizacion',
 'El archivo de los contratos de obra de la División está disperso entre correos, carpetas personales y la bitácora física. Ante esta situación, usted',
 ['organiza los expedientes según la TRD, define dónde se guarda cada documento y establece un control de entrega de soportes por contrato.',
  'guarda en su computador una copia de todo lo que recibe, para tener a mano la información cuando se la soliciten.',
  'deja el tema al área de archivo, porque la organización documental no hace parte de sus funciones técnicas.'],
 [2,1,0],
 ['Trabaja con organización y precisión, con control.','Solución individual que no resuelve el problema.','Desconoce la responsabilidad sobre sus expedientes.'])

C('C388-ORG-05','organizacion',
 'A mitad de la obra, usted prevé que el plazo no alcanzará por un retraso en la entrega de los diseños eléctricos. Ante esta situación, usted',
 ['espera a que el contratista solicite la prórroga, porque es él quien debe sustentar las causas del retraso en la ejecución.',
  'informa con anticipación a su jefe y a la interventoría, analiza alternativas (reprogramación, frentes paralelos) y documenta la situación.',
  'pide al contratista que trabaje horas extra sin modificar el cronograma, para no tener que tramitar ningún documento.'],
 [1,2,0],
 ['Reactivo.','Gestiona con oportunidad, seguimiento y documentación.','Solución informal que no garantiza el resultado.'])

/* ---- Investigación (Nivel B) ---- */
C('C388-INV-01','investigacion',
 'La dirección le pide recomendar si conviene concentrar en un solo edificio varias sedes de Bogotá. Ante esta situación, usted',
 ['consulta la opinión de los jefes de las dependencias y presenta la recomendación de la mayoría como conclusión del análisis.',
  'recopila datos de costos, áreas, ocupación y ubicación de usuarios, compara alternativas con un método definido y presenta escenarios con recomendaciones.',
  'toma como referencia lo que hizo otra entidad que concentró sus sedes y propone replicar el mismo modelo en la PGN.'],
 [0,2,1],
 ['Basado en opiniones, sin análisis técnico.','Diseña un estudio con método y propone mejoras institucionales (nivel B).','Usa una referencia útil, pero sin análisis propio.'])

C('C388-INV-02','investigacion',
 'Una universidad propone a la entidad un estudio conjunto sobre la vulnerabilidad sísmica de sus sedes. Ante esta situación, usted',
 ['recomienda no participar, porque compartir planos e información de las sedes con terceros podría generar riesgos de seguridad.',
  'analiza la propuesta, identifica cómo complementa las capacidades internas y propone un convenio con reglas de confidencialidad.',
  'sugiere aceptar solo si la universidad asume todo el trabajo y entrega el informe final sin participación de la entidad.'],
 [0,2,1],
 ['Desaprovecha la alianza.','Realiza alianzas con instituciones educativas para nuevos estudios (nivel B).','Participación limitada.'])

C('C388-INV-03','investigacion',
 'Debe emitir un concepto sobre el mejor sistema de cubierta para varias sedes en clima húmedo. Ante esta situación, usted',
 ['reutiliza el concepto elaborado para una sede de clima frío hace cuatro años, actualizando las fechas y los nombres de las sedes.',
  'consulta normas técnicas, fichas de fabricantes, experiencias de mantenimiento de la entidad y costos del ciclo de vida antes de concluir.',
  'pide cotizaciones a dos proveedores y recomienda el sistema que ofrezca el menor precio de instalación.'],
 [0,2,1],
 ['Información no pertinente.','Busca y evalúa información relevante con dominio técnico.','Información parcial centrada solo en el precio.'])

C('C388-INV-04','investigacion',
 'El estudio que usted realizó muestra que una sede que la dirección quería comprar tiene problemas de suelos. Ante esta situación, usted',
 ['ajusta el informe para destacar las ventajas de la sede y dejar los problemas de suelos en un anexo técnico poco visible.',
  'presenta los hallazgos con su evidencia, explica las implicaciones técnicas y económicas y propone alternativas.',
  'recomienda repetir el estudio con otro laboratorio, con la expectativa de obtener resultados más favorables para la compra.'],
 [0,2,0],
 ['Afecta la objetividad.','Aporta información confiable y veraz.','Sesga la investigación.'])

C('C388-INV-05','investigacion',
 'Le encargan identificar buenas prácticas de gestión de mantenimiento de edificios públicos. Ante esta situación, usted',
 ['selecciona fuentes técnicas reconocidas, compara modelos con criterios definidos y propone un modelo adaptado a las sedes de la PGN.',
  'toma el primer manual que encuentra en internet y lo resume para presentarlo a la dirección como propuesta.',
  'pregunta a un colega de otra entidad cómo lo hacen allá y transcribe sus recomendaciones en un documento.'],
 [2,0,1],
 ['Busca, analiza y evalúa información con método.','No evalúa la calidad de la fuente.','Útil, pero sin método investigativo.'])

/* ---- Pensamiento conceptual (Nivel A) ---- */
C('C388-PC-01','conceptual',
 'Debe explicar al comité directivo por qué una sede necesita reforzamiento estructural, cuando a simple vista «no tiene daños». Ante esta situación, usted',
 ['presenta el informe técnico completo de vulnerabilidad, con los cálculos y las tablas, para que el comité revise todo el detalle.',
  'explica con claridad el concepto de vulnerabilidad, los riesgos para los ocupantes y las alternativas, y propone lineamientos para decidir.',
  'afirma que el estudio lo recomienda y que, por tratarse de un tema técnico, el comité debe aprobarlo sin mayor discusión.'],
 [1,2,0],
 ['Riguroso, pero no aclara el problema a la audiencia.','Explica problemas complejos y formula directrices (nivel A).','No aclara la situación.'])

C('C388-PC-02','conceptual',
 'Las regionales reportan el estado de sus sedes con criterios distintos y las cifras no son comparables. Ante esta situación, usted',
 ['consolida la información tal como llega y la presenta con una nota que advierte que las regionales usan criterios diferentes.',
  'analiza los criterios usados, define una escala común de estado de sedes con indicadores y emite lineamientos para todas las regionales.',
  'usa el criterio de la sede de Bogotá, porque es la que mejor conoce, para reclasificar a su juicio la información de las demás.'],
 [1,2,0],
 ['Advierte, pero no resuelve.','Entiende el problema y genera lineamientos claros (nivel A).','Impone un criterio sin análisis.'])

C('C388-PC-03','conceptual',
 'Un problema de humedades en una sede involucra aspectos de diseño, mantenimiento, contratos anteriores y garantías vigentes. Ante esta situación, usted',
 ['propone una impermeabilización inmediata de toda la cubierta, porque es la solución técnica más conocida para este tipo de daños.',
  'descompone el problema (origen técnico, responsabilidades contractuales, garantías, costos) y formula directrices para atender cada componente.',
  'sugiere conformar una mesa de trabajo con varias dependencias para estudiar el tema en una próxima reunión.'],
 [1,2,0],
 ['Atiende solo un componente.','Entiende el problema desde sus elementos y formula directrices.','Aplaza la comprensión del problema.'])

C('C388-PC-04','conceptual',
 'Un indicador muestra que el 95 % de los mantenimientos se ejecutó, pero las fallas en sedes siguen aumentando. Ante esta situación, usted',
 ['reporta el indicador oficial, porque mide lo que se programó y no le corresponde cuestionar su construcción.',
  'analiza qué mide el indicador, identifica que no refleja la efectividad del mantenimiento y propone indicadores de resultado sustentados.',
  'reporta el indicador y agrega una observación general sobre su posible falta de precisión, sin detallar el problema.'],
 [0,2,1],
 ['No analiza el problema.','Aclara la situación con rigor técnico y conceptual.','Advierte, pero no aclara.'])

C('C388-PC-05','conceptual',
 'La Secretaría General le pide un concepto sobre si una obra requiere licencia y de qué tipo. Ante esta situación, usted',
 ['responde que las entidades públicas no necesitan licencia, para agilizar el inicio de la obra que la sede necesita con urgencia.',
  'analiza el alcance de la obra frente a las definiciones de licencias y reparaciones locativas, y emite un concepto claro con sus fundamentos.',
  'remite la consulta a la Oficina Jurídica, porque el tema de licencias es normativo y no técnico.'],
 [0,2,1],
 ['Concluye sin análisis y con un error.','Emite un concepto técnico que aclara la situación.','No ejerce su competencia técnica.'])

/* ---- Orientación a resultados (Nivel A) ---- */
C('C388-OR-01','resultados',
 'La meta anual era adecuar cuatro sedes y en septiembre ya se terminaron. Ante esta situación, usted',
 ['reporta el cumplimiento de la meta y dedica el resto del año a las tareas ordinarias de la División.',
  'propone metas más desafiantes para el resto del año, como atender sedes priorizadas por riesgo, y gestiona los recursos para lograrlas.',
  'adelanta algunas visitas a otras sedes si queda tiempo disponible después de las tareas ordinarias.'],
 [0,2,1],
 ['Se conforma con la meta.','Fija metas que trascienden los propósitos actuales (nivel A).','Supera la meta sin estrategia.'])

C('C388-OR-02','resultados',
 'La obra de una sede clave se retrasa porque el proveedor de ascensores incumplió la fecha de entrega. Ante esta situación, usted',
 ['informa que la obra se suspende hasta que llegue el ascensor y deja constancia de que el retraso es del proveedor.',
  'reprograma los frentes que pueden avanzar, exige al contratista un plan de contingencia y hace seguimiento para recuperar el plazo.',
  'avanza en la documentación de la obra mientras llega el ascensor, sin cambiar el cronograma de ejecución.'],
 [0,2,1],
 ['No enfrenta el obstáculo.','Realiza las acciones necesarias para lograr el objetivo enfrentando los obstáculos.','Avance parcial.'])

C('C388-OR-03','resultados',
 'Le piden reducir en 30 % el tiempo de trámite de los contratos de arrendamiento, lo que el equipo considera muy difícil. Ante esta situación, usted',
 ['explica a su jefe, con base en la experiencia, por qué la meta no es alcanzable y propone mantener los tiempos actuales.',
  'analiza el proceso, identifica cuellos de botella, propone formatos estándar y un plan con indicadores para alcanzar o superar la meta.',
  'intenta cumplir la meta trabajando más horas y pidiendo al equipo esfuerzos adicionales al final de cada mes.'],
 [0,2,1],
 ['Descarta la meta sin análisis.','Asume la meta desafiante con estrategia (nivel A).','Esfuerzo sin cambio estructural.'])

C('C388-OR-04','resultados',
 'La remodelación que usted lideró se entregó a tiempo, pero los servidores reportan que los espacios no son funcionales. Ante esta situación, usted',
 ['considera cumplido el objetivo, porque la obra se entregó en plazo, en presupuesto y conforme a los diseños aprobados.',
  'evalúa con los usuarios los problemas, define ajustes viables y aplica esas lecciones en el diseño de las próximas sedes.',
  'envía a los servidores un instructivo de uso de los nuevos espacios para que se adapten a ellos.'],
 [0,2,1],
 ['Confunde entrega con resultado.','Se orienta al resultado real y mejora.','Acción limitada.'])

C('C388-OR-05','resultados',
 'Al cierre del trimestre, una meta de mantenimiento no se cumplió por una decisión técnica suya. Ante esta situación, usted',
 ['explica que la meta dependía también de la entrega oportuna de materiales por parte de otra dependencia.',
  'asume la responsabilidad, analiza la causa y presenta un plan para recuperar el rezago en el siguiente trimestre.',
  'propone reducir la meta del siguiente periodo a un valor más realista, para no volver a quedar por debajo.'],
 [0,2,0],
 ['Evade la responsabilidad.','Asume la responsabilidad por los resultados.','Rebaja la exigencia.'])

/* ---- Cumplimiento de parámetros de trabajo (Nivel B) ---- */
C('C388-PAR-01','parametros',
 'Por urgencia, un directivo le pide iniciar unas reparaciones con un contratista conocido mientras se firma el contrato. Ante esta situación, usted',
 ['explica que no puede iniciarse ninguna ejecución sin contrato perfeccionado y registro presupuestal, y propone la vía contractual más ágil disponible.',
  'acepta iniciar solo las actividades más urgentes y pide al contratista que espere el pago hasta que se firme el contrato.',
  'cumple la instrucción porque viene de un superior y deja constancia escrita de que la orden no fue suya.'],
 [2,1,0],
 ['Aplica la normatividad y propone una solución dentro del proceso.','Mitiga, pero genera un hecho cumplido.','Incumple la norma.'])

C('C388-PAR-02','parametros',
 'Un oferente de una licitación de obra le pide una reunión privada para «aclarar» el anexo técnico antes del cierre. Ante esta situación, usted',
 ['acepta la reunión para resolver rápidamente las dudas técnicas y evitar que la oferta llegue mal formulada.',
  'le indica que las aclaraciones deben solicitarse por el canal oficial del proceso en el SECOP para que sean públicas para todos.',
  'le responde por correo electrónico personal con las aclaraciones, porque son precisiones técnicas menores.'],
 [0,2,0],
 ['Vulnera transparencia e igualdad.','Aplica la normatividad del proceso.','Comunicación por fuera del proceso.'])

C('C388-PAR-03','parametros',
 'La entidad adoptó un nuevo procedimiento para la recepción de obras que exige pruebas de las instalaciones antes del acta de recibo. Ante esta situación, usted',
 ['sigue recibiendo como antes, porque el nuevo procedimiento demora la entrega y las obras anteriores no tuvieron problemas.',
  'aplica el procedimiento, orienta a la interventoría para que lo siga y propone ajustes por los canales formales si encuentra mejoras.',
  'aplica el nuevo procedimiento solo en las obras grandes y mantiene el anterior para las adecuaciones menores.'],
 [0,2,1],
 ['Desconoce los lineamientos.','Sigue las reglas y alinea al equipo con los procedimientos (nivel B).','Aplicación parcial y discrecional.'])

C('C388-PAR-04','parametros',
 'En una adecuación, el contratista propone cambiar un material especificado por otro «equivalente» más barato. Ante esta situación, usted',
 ['acepta el cambio de inmediato, porque reduce costos para la entidad sin afectar el plazo de la obra.',
  'exige que la solicitud se tramite formalmente, con fichas técnicas y concepto de la interventoría y del diseñador, antes de decidir.',
  'rechaza cualquier cambio de material sin estudiarlo, porque las especificaciones nunca pueden modificarse.'],
 [0,2,1],
 ['Omite el procedimiento y el control técnico.','Aplica los criterios del proceso con rigor.','Cumple la norma de forma rígida, sin evaluar.'])

C('C388-PAR-05','parametros',
 'Para cumplir una fecha, un compañero sugiere fraccionar una obra en varios contratos pequeños de mínima cuantía. Ante esta situación, usted',
 ['acepta, porque así se evita un proceso más largo y la sede puede atenderse antes de que termine la vigencia.',
  'explica que fraccionar para eludir la modalidad está prohibido y propone planear el proceso adecuado con un cronograma realista.',
  'acepta fraccionar solo en dos contratos, para que la diferencia con la cuantía real no sea tan evidente.'],
 [0,2,0],
 ['Desconoce la prohibición de fraccionamiento.','Aplica la normatividad y propone una solución.','Incumple igualmente la norma.'])

/* ---- Creatividad e innovación (Nivel C) ---- */
C('C388-CRE-01','creatividad',
 'Las solicitudes de mantenimiento de las sedes llegan por correo, teléfono y oficios, y muchas se pierden. Ante esta situación, usted',
 ['diseña un procedimiento con un formulario único y un registro de seguimiento, lo prueba en dos sedes y lo ajusta antes de extenderlo.',
  'pide a las sedes que envíen las solicitudes solo por correo, para tener al menos un canal unificado de recepción.',
  'sigue atendiendo las solicitudes según lleguen, porque el volumen actual todavía puede manejarse con el equipo existente.'],
 [2,1,0],
 ['Diseña y prueba un nuevo procedimiento (nivel C).','Mejora parcial sin diseño de procedimiento.','No propone cambios.'])

C('C388-CRE-02','creatividad',
 'Usted conoce una buena práctica de otra entidad para inspeccionar sedes con listas de chequeo digitales y fotografías georreferenciadas. Ante esta situación, usted',
 ['la adapta a las necesidades de la PGN, define el nuevo procedimiento de inspección y lo pone a prueba en una regional.',
  'la comenta con sus compañeros como una idea interesante para tenerla en cuenta en el futuro.',
  'copia sin cambios el formato de la otra entidad y lo envía a todas las regionales para su uso inmediato.'],
 [2,0,1],
 ['Crea nuevas formas de trabajo adaptando buenas prácticas y las prueba (nivel C).','No la lleva a la práctica.','Aplica sin adaptar ni probar.'])

C('C388-CRE-03','creatividad',
 'La elaboración de estudios previos para contratos de mantenimiento toma demasiado tiempo porque cada vez se parte de cero. Ante esta situación, usted',
 ['continúa elaborándolos uno por uno, porque cada contrato tiene particularidades que no permiten estandarizar.',
  'diseña plantillas y una matriz de especificaciones reutilizables, las prueba en el siguiente proceso y mide el tiempo ahorrado.',
  'pide más personal para poder elaborar los estudios previos con mayor rapidez.'],
 [0,2,1],
 ['No innova.','Diseña nuevos procedimientos y los pone a prueba (nivel C).','Busca resolver con más recursos, sin cambiar el método.'])

C('C388-CRE-04','creatividad',
 'Un nuevo procedimiento de control de inventario que usted diseñó presentó fallas en su primera aplicación. Ante esta situación, usted',
 ['vuelve al procedimiento anterior, porque el nuevo no funcionó como se esperaba en la prueba.',
  'analiza las fallas, ajusta el procedimiento y lo vuelve a probar antes de proponer su adopción definitiva.',
  'lo adopta de todas formas, porque ya fue socializado y retirarlo afectaría su credibilidad.'],
 [0,2,0],
 ['Abandona la innovación ante el primer obstáculo.','Perfecciona y vuelve a probar el procedimiento (nivel C).','Implementa sin corregir.'])

C('C388-CRE-05','creatividad',
 'Las sedes consumen mucha energía y no hay presupuesto para grandes inversiones. Ante esta situación, usted',
 ['propone medidas de bajo costo (sensores de presencia, ajuste de horarios, mantenimiento de equipos), diseña un procedimiento de control y lo prueba en una sede.',
  'recomienda esperar a tener presupuesto para instalar paneles solares en todas las sedes de la entidad.',
  'envía una circular pidiendo a los servidores apagar las luces al salir de las oficinas.'],
 [2,0,1],
 ['Diseña y prueba nuevos procedimientos (nivel C).','Aplaza la mejora.','Medida útil pero limitada, sin procedimiento.'])
