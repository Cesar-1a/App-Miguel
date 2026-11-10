/* Ajustes de longitud de opciones para la Convocatoria 388.
   En la primera redacción la opción correcta era casi siempre la más larga, lo que permitía acertar sin saber.
   Aquí se desarrollan los distractores (con su «porque…») sin cambiar la clave ni las justificaciones.
   Formato: id -> { texto original del distractor: texto nuevo }. Q() y C() en config.js los aplican
   y nunca modifican la opción correcta. Debe cargarse antes de los bancos. */
window.OPC = window.OPC || {};
window.OPCT = {
'CTR-14': {
  'licitación pública obligatoriamente.': 'licitación pública, porque la compra de equipos de cómputo supera siempre la menor cuantía de la entidad.',
  'concurso de méritos.': 'concurso de méritos, porque la calidad técnica de los computadores es el factor determinante.',
  'contratación directa.': 'contratación directa, porque los equipos deben ser compatibles con los que ya tiene la entidad.'},
'CTR-16': {
  '100 SMMLV.': '100 SMMLV (25 % del valor inicial).', '400 SMMLV.': '400 SMMLV (100 % del valor inicial).', 'no hay límite.': 'no hay límite si se justifica.'},
'C388-CTR-05': {
  'ambos son equivalentes, porque los dos se descuentan de las actas parciales de obra en proporción al avance.': 'ambos son equivalentes, porque los dos se entregan antes de iniciar la obra y se descuentan de las actas parciales de obra en proporción al avance ejecutado.',
  'el pago anticipado solo procede en contratos de mínima cuantía, mientras que el anticipo procede en los de licitación.': 'el pago anticipado solo procede en contratos de mínima cuantía y selección abreviada, mientras que el anticipo procede únicamente en los contratos adjudicados por licitación pública.'},
'INT-01': {
  'un servidor de la misma entidad contratante, designado por el ordenador del gasto para vigilar el contrato.': 'un servidor de la misma entidad contratante, designado por el ordenador del gasto mediante acto administrativo para vigilar todas las obligaciones del contrato.',
  'la Contraloría General de la República, que designa interventores para los contratos de mayor cuantía.': 'la Contraloría General de la República, que designa interventores para los contratos de mayor cuantía como parte del control fiscal concomitante y preventivo.'},
'INT-05': {
  'pueden ejercerse plenamente de forma simultánea, porque dos vigilantes garantizan mejor control del contrato.': 'pueden ejercerse plenamente de forma simultánea sobre todas las obligaciones, porque dos vigilantes independientes garantizan un mejor control técnico y administrativo del contrato.',
  'solo pueden coexistir si la Contraloría aprueba previamente la división de responsabilidades.': 'solo pueden coexistir si la Contraloría aprueba previamente la división de responsabilidades y el ordenador del gasto lo informa en el SECOP II.'},
'INT-08': {
  'que el interventor amplíe el plazo del contrato, porque la causa es ajena a las partes.': 'que el interventor amplíe el plazo del contrato mediante anotación en la bitácora, porque la causa es ajena a las partes y él es la autoridad técnica de la obra.',
  'aplicar multas al contratista, porque el riesgo climático siempre corre por su cuenta.': 'aplicar multas al contratista por el atraso, porque el riesgo climático corre siempre por su cuenta en los contratos de obra a precios unitarios.',
  'declarar la caducidad, porque la paralización de la obra es una causal objetiva.': 'declarar la caducidad del contrato, porque la paralización de la obra durante varias semanas es una causal objetiva que no exige analizar su origen.'},
'INT-09': {
  'firmar el recibo a satisfacción y dejar los pendientes para la etapa de garantía de estabilidad.': 'firmar el recibo a satisfacción y dejar los pendientes para la etapa de garantía de estabilidad, porque esa póliza cubre cualquier defecto que se detecte después de la entrega.',
  'negarse a recibir y declarar el incumplimiento definitivo del contrato.': 'negarse a recibir la obra y solicitar que se declare el incumplimiento definitivo del contrato, porque toda obra debe entregarse sin ningún pendiente.'},
'INT-12': {
  'remitir el asunto a la Contraloría para que imponga una sanción al contratista.': 'remitir el asunto a la Contraloría para que imponga una sanción al contratista, porque la falta de documentos técnicos constituye un posible detrimento patrimonial.',
  'elaborarlos con su propio personal y descontar el costo de sus honorarios a la entidad.': 'elaborarlos con su propio personal técnico y cobrar ese trabajo a la entidad como una actividad adicional de su contrato de interventoría.'},
'INT-14': {
  'esperar a que la obra termine para que el estudio de vulnerabilidad determine si hay que reforzar.': 'esperar a que la obra termine para que un estudio de vulnerabilidad determine si hay que reforzar, porque suspender ahora generaría mayores costos y reclamaciones del contratista.',
  'ordenar al contratista que duplique el refuerzo por su cuenta, porque así se garantiza la seguridad sin trámites.': 'ordenar al contratista que duplique el refuerzo de las vigas por su cuenta y riesgo, porque así se garantiza la seguridad de la estructura sin trámites contractuales.'},
'PRE-03': {
  'certificar que existe apropiación disponible antes de iniciar el proceso de selección.': 'certificar que existe apropiación disponible y libre de afectación antes de iniciar el proceso de selección del contratista.',
  'autorizar el giro de los recursos al contratista en la fecha del acta de inicio.': 'autorizar el giro de los recursos al contratista en la fecha del acta de inicio, conforme al Programa Anual Mensualizado de Caja.'},
'PRE-08': {
  'deben ejecutarse por un funcionario especializado en finanzas públicas.': 'deben ejecutarse por un funcionario especializado en finanzas públicas, designado por el ordenador del gasto de cada órgano.',
  'se especializan cada año según las prioridades que defina el ordenador del gasto.': 'se especializan cada año según las prioridades que defina el ordenador del gasto, quien puede reorientarlas sin trámite adicional.'},
'PRE-09': {
  'ser aprobado por la Contraloría como proyecto de interés fiscal.': 'ser aprobado previamente por la Contraloría General como proyecto de interés fiscal para la vigencia.',
  'contar con la aprobación del Concejo del municipio donde se construirá la sede.': 'contar con la aprobación del Concejo del municipio donde se construirá la sede, mediante acuerdo municipal.'},
'PRE-11': {
  'los bienes inmuebles de la entidad no pueden venderse.': 'los bienes inmuebles de la entidad no pueden venderse ni gravarse mientras estén incorporados en el presupuesto de la vigencia.',
  'ningún contratista puede embargar a una entidad en ningún caso.': 'ningún acreedor puede embargar los recursos de una entidad pública en ningún caso, ni siquiera para el pago de sentencias judiciales.'},
'PRE-12': {
  'una adición presupuestal, que requiere nueva ley.': 'una adición presupuestal, que requiere ley previa porque modifica la destinación aprobada por el Congreso.',
  'una reserva presupuestal.': 'una reserva presupuestal, que se constituye para garantizar el gasto en el rubro deficitario.',
  'un crédito extraordinario, que aprueba el Congreso.': 'un crédito extraordinario, que debe aprobar el Congreso porque cambia el rubro inicialmente apropiado.'},
'INM-01': {
  'puede otorgarse a cualquier persona natural o jurídica, por el término que acuerden las partes.': 'puede otorgarse a cualquier persona natural o jurídica que justifique un fin social, por el término que acuerden las partes en el contrato.',
  'está prohibido para inmuebles de entidades nacionales, que solo pueden venderse o arrendarse.': 'está prohibido para los inmuebles de las entidades del orden nacional, que solo pueden venderse, arrendarse o transferirse a otras entidades.'},
'INM-02': {
  'el número de servidores que trabajen en cada piso.': 'el número de servidores y visitantes que ocupen cada piso, según el uso de las zonas comunes.',
  'el número de visitantes que reciba la entidad.': 'el área de las zonas comunes que use la entidad, según la medición del administrador.',
  'el avalúo catastral de cada piso.': 'el avalúo catastral de cada unidad privada, actualizado cada año.'},
'INM-03': {
  'comparar solo el canon mensual frente a la cuota de un crédito hipotecario, porque es el costo visible.': 'comparar el canon mensual frente a la cuota de un crédito hipotecario a veinte años, porque son los únicos costos recurrentes que afectan el presupuesto de la entidad.',
  'elegir siempre la compra, porque los inmuebles propios se valorizan y no generan gasto.': 'elegir la compra, porque los inmuebles propios se valorizan con el tiempo y dejan de generar gastos de funcionamiento a partir del primer año de uso.'},
'INM-04': {
  'estén registrados en la Superintendencia de Sociedades.': 'estén registrados en la Superintendencia de Notariado y Registro a nombre de la Nación.',
  'hayan sido avaluados por la Contraloría cada año.': 'hayan sido avaluados cada año por la Contraloría para efectos contables.',
  'no hayan sido adquiridos con recursos de inversión.': 'hayan sido adquiridos con recursos de inversión registrados en el BPIN.'},
'INM-06': {
  'dejarlo en el inventario sin acciones, porque no genera gastos de operación.': 'dejarlo en el inventario sin adelantar acciones, porque un predio desocupado no genera gastos de operación y puede servir en el futuro para una nueva sede.',
  'cederlo verbalmente al municipio para evitar el pago del impuesto predial.': 'entregarlo al municipio mediante un acuerdo de voluntades con el alcalde, para evitar el pago del impuesto predial mientras se decide su destino.'},
'INM-08': {
  'no se reconoce, porque los bienes públicos no tienen valor contable.': 'no se reconoce como activo, porque los bienes de uso público y fiscal de la Nación no tienen valor contable para la entidad que los ocupa.',
  'se registra como gasto en el año de su compra.': 'se registra como gasto en el año de su compra, porque se pagó con recursos de inversión.',
  'se deprecia junto con el terreno en el mismo plazo.': 'se deprecia junto con el terreno durante la misma vida útil, porque ambos forman un solo activo.'},
'INM-09': {
  'esperar el vencimiento y ocupar el inmueble sin contrato hasta firmar uno nuevo.': 'esperar el vencimiento y continuar ocupando el inmueble hasta firmar uno nuevo, porque la ley prorroga automáticamente los arrendamientos del Estado.',
  'pagar los cánones de los meses siguientes por adelantado para asegurar el inmueble.': 'pagar por adelantado los cánones de los meses siguientes con el saldo del contrato actual, para asegurar el inmueble mientras se tramita la prórroga.'},
'INM-10': {
  'cualquier persona que conozca el sector inmobiliario de la zona.': 'cualquier profesional que conozca el sector inmobiliario de la zona y presente referencias de transacciones recientes.',
  'únicamente el notario que vaya a protocolizar la escritura.': 'únicamente el notario que vaya a protocolizar la escritura, porque da fe del precio pactado entre las partes.',
  'solo el vendedor, porque conoce el valor real de su inmueble.': 'el propietario vendedor, acompañado de una cotización de inmobiliaria, porque conoce mejor el valor real de su inmueble.'},
'INM-11': {
  'un correo informal al propietario indicando que el inmueble está bien.': 'un correo al propietario indicando que el inmueble se recibe en buen estado, con copia al supervisor del contrato.',
  'la factura del primer canon de arrendamiento.': 'la factura del primer canon, que demuestra que el inmueble se recibió a satisfacción.',
  'el certificado de tradición y libertad actualizado.': 'el certificado de tradición y libertad actualizado, que acredita el estado del inmueble al momento de la entrega.'},
'INM-12': {
  'el índice de construcción.': 'el índice de construcción del predio.', 'el coeficiente de copropiedad.': 'el coeficiente de copropiedad de la sede.', 'la tasa interna de retorno.': 'la tasa interna de retorno del inmueble.'},
'EST388-01': {
  'la Ley 388 de 1997, mediante el Decreto 1077 de 2015.': 'la Ley 388 de 1997, mediante el Decreto 1077 de 2015 y sus modificaciones.',
  'la Ley 80 de 1993, mediante el Decreto 1082 de 2015.': 'la Ley 80 de 1993, mediante el Decreto 1082 de 2015 y sus modificaciones.'},
'EST388-06': {
  'demoler el edificio de inmediato, porque toda construcción anterior a 1984 es insegura.': 'demoler el edificio y construir una sede nueva, porque toda construcción anterior a la primera norma sismo resistente de 1984 es insegura.',
  'aumentar el número de pisos para mejorar la rigidez lateral del edificio.': 'construir uno o dos pisos adicionales con estructura metálica liviana, porque así se mejora la rigidez lateral del edificio existente.'},
'EST388-09': {
  'reducir el costo del acero de refuerzo.': 'reducir la cantidad de acero de refuerzo requerida en columnas y vigas del sistema estructural.',
  'aumentar el área útil de cada piso.': 'aumentar el área útil de cada piso al permitir columnas más esbeltas y luces mayores.',
  'mejorar el aislamiento acústico entre oficinas.': 'garantizar el confort de los ocupantes frente a las vibraciones producidas por el viento.'},
'EST388-10': {
  'sustituirlo por una viga de madera, porque es más liviana que la mampostería.': 'sustituirlo por una viga de madera inmunizada, porque es más liviana que la mampostería y reduce la carga sobre la cimentación existente.',
  'pedir que lo demuelan de noche para no afectar la atención al público.': 'autorizar la demolición en horario nocturno con una cuadrilla especializada, para no afectar la atención al público ni la seguridad de los servidores.'},
'EST388-12': {
  'aplicar un acabado nuevo para ocultar las fisuras y evitar alarma.': 'aplicar un acabado flexible sobre las fisuras y monitorear su evolución durante un año, para no generar alarma entre los ocupantes.',
  'aumentar la carga sobre la losa para comprobar su resistencia.': 'realizar una prueba de carga improvisada con materiales de la obra, para comprobar de inmediato si la losa resiste el uso normal.',
  'esperar al próximo mantenimiento anual para revisarla.': 'incluir la revisión de la losa en el próximo mantenimiento anual programado, porque las deflexiones suelen estabilizarse.'},
'EST388-13': {
  'que la curaduría elabore los diseños estructurales.': 'que la curaduría urbana elabore o ajuste los diseños estructurales del proyecto.',
  'que el constructor apruebe los diseños antes de construir.': 'que el constructor responsable apruebe los diseños antes de iniciar la obra.',
  'que el interventor firme los planos como diseñador.': 'que el interventor de la obra firme los planos como diseñador responsable.'},
'LIC-06': {
  'es válida, porque las entidades del Estado están exentas de licencias urbanísticas.': 'es válida, porque las entidades del Estado están exentas de licencias urbanísticas cuando las obras se destinan a la prestación de funciones públicas.',
  'es válida si la interventoría aprueba los planos.': 'es válida si la interventoría aprueba previamente los planos y deja constancia en la bitácora de que se cumplen las normas urbanísticas.',
  'solo es irregular si la obra supera los 2.000 m².': 'solo es irregular si el área intervenida supera los 2.000 m², umbral a partir del cual la ley exige supervisión técnica independiente.'},
'LIC-07': {
  'certificar el pago del impuesto de delineación urbana.': 'certificar el pago del impuesto de delineación urbana y de las demás obligaciones urbanísticas del proyecto.',
  'autorizar el inicio de las obras de construcción.': 'autorizar el inicio de las obras de construcción una vez aprobados los diseños estructurales.',
  'reemplazar la licencia de construcción en obras públicas.': 'reemplazar la licencia de construcción en las obras públicas de entidades del orden nacional.'},
'LIC-08': {
  'una licencia de obra nueva sobre lo ya construido.': 'una licencia de construcción en la modalidad de obra nueva sobre lo ya construido.',
  'una declaración extrajuicio del director administrativo.': 'una declaración extrajuicio del director administrativo sobre la antigüedad de la obra.',
  'una licencia de demolición para volver a construir.': 'una licencia de demolición total seguida de una licencia de obra nueva.'},
'LIC-09': {
  'el contrato de obra y la póliza de cumplimiento.': 'el contrato de obra suscrito, la póliza de cumplimiento y el acta de inicio de la interventoría.',
  'el presupuesto de obra aprobado por el ordenador del gasto.': 'el presupuesto de obra aprobado por el ordenador del gasto y el certificado de disponibilidad presupuestal.'},
'LIC-10': {
  'iniciar la obra de inmediato, porque los recursos no tienen efecto sobre la licencia.': 'iniciar la obra de inmediato, porque los recursos de los vecinos se tramitan en efecto devolutivo y no impiden ejecutar la licencia.',
  'iniciar solo la demolición mientras se resuelven los recursos.': 'iniciar solo las demoliciones y excavaciones mientras se resuelven los recursos, porque no hacen parte de la licencia recurrida.',
  'desistir del proyecto, porque la oposición de vecinos anula la licencia.': 'desistir del proyecto, porque la oposición formal de los vecinos colindantes deja sin efecto la licencia expedida.'},
'LIC-12': {
  'aprobarlo, porque el índice de construcción prevalece sobre la altura.': 'aprobarlo, porque cuando se cumple el índice de construcción la altura se ajusta automáticamente a la norma.',
  'aprobarlo porque el solicitante es una entidad pública.': 'aprobarlo, porque las sedes de entidades públicas pueden exceder la altura cuando prestan servicios a la comunidad.',
  'remitir el proyecto al Concejo para que autorice la excepción.': 'remitir el proyecto al Concejo distrital para que autorice la excepción mediante acuerdo antes de licenciar.'},
'ARQ-05': {
  'dejar que el contratista de obra resuelva en sitio cada interferencia que encuentre.': 'dejar que el contratista de obra resuelva en sitio cada interferencia, porque conoce las condiciones reales y puede ajustar los recorridos sin detener la obra.',
  'eliminar el aire acondicionado del proyecto para simplificar la coordinación.': 'reemplazar el aire acondicionado central por equipos individuales en cada oficina, para eliminar los ductos que cruzan la estructura.'},
'ARQ-08': {
  'que es aceptable porque el sótano tiene ventilación natural suficiente.': 'que es aceptable, porque el sótano tiene ventilación natural suficiente para evacuar el humo en caso de incendio.',
  'que basta con instalar más extintores en el sótano para compensar.': 'que basta con instalar rociadores y más extintores en el sótano, porque así se compensa la falta de salida directa.',
  'que el diseño cumple si la escalera tiene el ancho mínimo exigido.': 'que el diseño cumple si la escalera tiene el ancho mínimo exigido según el número de ocupantes de cada piso.'},
'ARQ-10': {
  'tramitar solo la licencia ordinaria ante la curaduría, como en cualquier edificación.': 'tramitar la licencia ordinaria ante la curaduría, porque los bienes de interés cultural de propiedad pública solo requieren el aval del comité directivo.',
  'demoler los elementos que no sirvan a la nueva función, porque la entidad es propietaria.': 'retirar los elementos que no sirvan a la nueva función, porque como propietaria la entidad puede adaptar el inmueble a sus necesidades del servicio.'},
'ESB-02': {
  'responde únicamente la aseguradora.': 'responde únicamente la aseguradora de la obra.', 'responde exclusivamente el propietario.': 'responde el propietario, salvo pacto en contrario.', 'no hay responsabilidad pasados cinco años.': 'no hay responsabilidad pasados cinco años del recibo.'},
'ESB-04': {
  'exceso de cemento en la mezcla, que produce manchas rojizas en la superficie.': 'exceso de cemento en la mezcla, que produce manchas rojizas y desprendimientos superficiales sin afectar el refuerzo.',
  'un problema estético de la pintura, sin consecuencias estructurales.': 'un problema estético de la pintura por la humedad del parqueadero, sin consecuencias estructurales.'},
'ESB-06': {
  'ignorar el resultado, porque la losa ya está construida.': 'aceptar la losa, porque la resistencia del concreto sigue aumentando después de los 28 días y alcanzará el valor especificado.',
  'demoler de inmediato toda la losa sin evaluación adicional.': 'ordenar la demolición inmediata de toda la losa, porque cualquier resultado por debajo de lo especificado obliga a reconstruir.',
  'aumentar el espesor del acabado de piso para compensar la baja resistencia.': 'aumentar el espesor del afinado de piso con mortero de alta resistencia, para compensar la menor capacidad de la losa.'},
'ESB-07': {
  'la falta de pintura en los muros exteriores.': 'la falta de pintura protectora en los muros, que permite la oxidación del ladrillo.',
  'un exceso de acero de refuerzo en la mampostería.': 'un exceso de acero de refuerzo en la mampostería, que se corroe y mancha la superficie.',
  'la acción del viento sobre la fachada.': 'la acción del viento y la radiación solar, que decoloran la superficie del ladrillo.'},
'ESB-08': {
  'reducir el recubrimiento para ahorrar concreto.': 'reducir el recubrimiento para disminuir el peso propio y usar aditivos acelerantes de fraguado.',
  'usar acero de mayor diámetro sin cambiar el concreto.': 'usar acero de mayor diámetro, de modo que la pérdida de sección por corrosión no afecte la resistencia.',
  'pintar el concreto con vinilo interior.': 'aplicar pintura vinílica sobre el concreto terminado, que sella los poros de la superficie.'},
'ESB-09': {
  'la obra haya sido recibida sin acta.': 'la obra se haya recibido sin acta formal, para que no corra el término.',
  'el contratista siga ejecutando otro contrato con la entidad.': 'el contratista mantenga vigente otro contrato con la entidad.',
  'el interventor siga contratado durante cinco años.': 'el interventor continúe contratado durante el plazo de la garantía.'},
'ESB-10': {
  'unir dos estructuras para que trabajen como una sola.': 'unir dos cuerpos de la edificación para que trabajen como una sola estructura ante cargas sísmicas.',
  'mejorar la apariencia de la fachada.': 'marcar en la fachada los cambios de material, mejorando su apariencia y modulación.',
  'reemplazar la cimentación en suelos blandos.': 'reemplazar la cimentación profunda en suelos blandos, repartiendo las cargas entre ambos lados.'},
'SUE-02': {
  'romper una muestra cilíndrica de concreto.': 'romper a compresión una muestra cilíndrica de suelo extraída del sondeo.',
  'compactar una capa de relleno en el laboratorio.': 'compactar en el laboratorio una muestra hasta su densidad seca máxima.',
  'medir el nivel freático en el sondeo.': 'estabilizar las paredes del sondeo antes de medir el nivel freático.'},
'SUE-04': {
  'gravas mal gradadas.': 'gravas arcillosas mal gradadas.', 'arenas limpias bien gradadas.': 'arenas limpias bien gradadas y sueltas.', 'rocas sanas.': 'limos orgánicos de baja plasticidad.'},
'SUE-05': {
  'una placa de contrapiso sin refuerzo.': 'una losa de cimentación superficial rígida, que reparte la carga sobre las arcillas blandas.',
  'zapatas aisladas superficiales, porque son más económicas.': 'zapatas aisladas superficiales de mayor área, porque reducen la presión sobre las arcillas.'},
'SUE-06': {
  'asentamiento inmediato.': 'asentamiento elástico inmediato.', 'licuación.': 'licuación por carga estática.', 'expansión.': 'expansión por humedecimiento.'},
'SUE-08': {
  'aceptarlo si la interventoría lo firma.': 'aceptarlo si la interventoría lo revisa y lo firma, asumiendo la responsabilidad técnica de la decisión.',
  'aceptarlo si el edificio vecino no presenta fisuras.': 'aceptarlo si el edificio vecino, construido sobre ese suelo, no presenta fisuras ni asentamientos visibles.'},
'SUE-09': {
  'la estación del año en que se haga la exploración.': 'la estación del año en que se haga la exploración y el nivel freático observado.',
  'el presupuesto que el propietario decida asignar.': 'el presupuesto asignado al estudio y el plazo que fije el propietario.',
  'el número de servidores que ocuparán la sede.': 'el número de ocupantes de la sede y el área de cada piso.'},
'SUE-10': {
  'continuar la excavación, porque el agua se evaporará con el tiempo.': 'continuar la excavación con normalidad, porque el agua superficial se drena sola cuando se alcanza la cota de cimentación.',
  'rellenar la excavación con material de la misma obra.': 'rellenar parcialmente la excavación con material de la obra y subir la cota del sótano para evitar el agua.',
  'bombear el agua hacia el alcantarillado de los vecinos sin autorización.': 'bombear el agua hacia la red pública más cercana y continuar la excavación, para no retrasar el cronograma.'},
'SUE-12': {
  'el interventor del contrato de obra.': 'el interventor del contrato de obra, con su firma de aprobación.',
  'el arquitecto diseñador del proyecto.': 'el arquitecto diseñador del proyecto con matrícula profesional vigente.',
  'el maestro de obra con experiencia en la zona.': 'el laboratorio de suelos que realizó los ensayos de las muestras.'},
'PRY-02': {
  'la TIR es necesariamente negativa.': 'la TIR del proyecto es menor que la tasa de descuento utilizada.',
  'el periodo de recuperación es inferior a un año.': 'el periodo de recuperación de la inversión es inferior a un año.',
  'la relación beneficio/costo es menor que uno.': 'la relación beneficio/costo del proyecto es menor que uno.'},
'PRY-05': {
  'debe ejecutarse al final del proyecto.': 'debe programarse al final del proyecto, cuando ya no quedan actividades que dependan de ella.',
  'es la actividad de menor costo del proyecto.': 'tiene el menor costo del proyecto, por lo que no se le asignan recursos adicionales de tiempo.'},
'PRY-08': {
  'licencias, impuestos y seguros.': 'licencias, impuestos, pólizas y seguros del contrato.',
  'administración, imprevistos y utilidad.': 'administración, imprevistos y utilidad del contratista.',
  'costos de interventoría y supervisión.': 'costos de interventoría, supervisión y diseños.'},
'PRY-11': {
  'definir la resistencia del concreto.': 'definir la curva de resistencia del concreto a lo largo del tiempo de curado.',
  'calcular el índice de construcción del predio.': 'calcular la ocupación del predio a medida que se construyen los pisos.',
  'clasificar los suelos.': 'representar la curva granulométrica de los suelos del proyecto.'},
'SED-01': {
  'únicamente que los trabajadores tengan casco, porque la altura es inferior a 5 m.': 'que los trabajadores usen casco y botas, porque el reglamento de trabajo en alturas solo aplica a partir de 5 m de altura.',
  'que la entidad asuma la afiliación a riesgos laborales de los trabajadores del contratista.': 'que la entidad afilie a riesgos laborales a los trabajadores del contratista, porque la obra se realiza en sus instalaciones.',
  'que los trabajos se hagan de noche para no exponer a los servidores.': 'que los trabajos se programen en horario nocturno, porque así no se expone a los servidores ni a los usuarios.'},
'SED-02': {
  'la Ley 594 de 2000 y sus acuerdos.': 'la Ley 1755 de 2015 y el Decreto 1166 de 2016.',
  'la Ley 1712 de 2014.': 'el Decreto 1499 de 2017 y el Manual Operativo del MIPG.'},
'SED-03': {
  'la aprobación del vigilante de la sede.': 'el visto bueno del supervisor de mantenimiento de la sede, una vez energizada la instalación.',
  'solo la factura de los materiales eléctricos comprados.': 'la factura y las fichas técnicas de los materiales eléctricos instalados por el contratista.',
  'un concepto del área de sistemas de la entidad.': 'un concepto del área de tecnología de la entidad sobre la red de cableado estructurado.'},
'SED-04': {
  'la ejecución de todos los frentes al mismo tiempo para terminar más rápido.': 'la ejecución simultánea de todos los frentes de obra, porque así se reduce al mínimo el tiempo de afectación de servidores y usuarios.',
  'la suspensión del plan de emergencias durante la obra.': 'la suspensión temporal del plan de emergencias de la sede, porque las rutas cambian a diario y lo asume el contratista.',
  'el cierre de la sede sin informar a los usuarios, para evitar reclamos.': 'el traslado de la atención a otra sede sin aviso previo, para evitar reclamos de los usuarios durante la obra.'},
'SED-06': {
  'ubicarse solo en la recepción, para no afectar la estética de las oficinas.': 'concentrarse en la recepción y en los puntos de encuentro, para no afectar la estética de las oficinas remodeladas.',
  'instalarse únicamente cuando lo exija el cuerpo de bomberos.': 'instalarse una vez el cuerpo de bomberos realice la inspección y defina las rutas definitivas.',
  'ser igual a la de cualquier aviso comercial.': 'seguir el manual de imagen institucional de la entidad, con sus colores y tipografías.'},
'SED-07': {
  'aceptarlo, porque las redes enterradas no se deterioran.': 'aceptarlo, porque las redes que no presentan fugas visibles pueden seguir en servicio sin pruebas adicionales.',
  'aceptarlo si el contratista otorga una carta de compromiso.': 'aceptarlo si el contratista otorga una carta de compromiso de reparar cualquier falla durante la garantía.',
  'rechazar todo el proyecto de adecuación.': 'exigir el reemplazo total de la red sin revisarla, porque toda red de esa edad debe cambiarse.'},
'SED-08': {
  'hacerse de cualquier forma, siempre que se retiren de la sede.': 'quedar a criterio del contratista, siempre que los retire de la sede antes del acta de recibo final.',
  'depositarse en la vía pública para que los recoja el servicio de aseo.': 'entregarse al servicio ordinario de aseo, en bolsas, junto con los residuos de las oficinas.',
  'quemarse en el lote para reducir el volumen.': 'triturarse en el lote y usarse como relleno de la sede sin control técnico.'},
'SED-09': {
  'solo los colores de las divisiones.': 'los materiales y colores de las divisiones, para que armonicen con el mobiliario existente.',
  'únicamente el número de puestos de trabajo.': 'el número de puestos de trabajo y la distribución de los equipos de cómputo y las impresoras.',
  'el inventario de bienes muebles de la dependencia.': 'el inventario de bienes muebles de la dependencia y su asignación a cada servidor.'},
'SED-10': {
  'atender primero las sedes cuyos jefes reclamen con más insistencia.': 'atender primero las sedes que hayan presentado más solicitudes formales en el último año, porque reflejan la mayor necesidad.',
  'distribuir el presupuesto en partes iguales entre todas las sedes.': 'distribuir el presupuesto en partes iguales entre todas las sedes, para garantizar un trato equitativo a las regionales.',
  'atender solo las sedes ubicadas en capitales.': 'concentrar los recursos en las sedes de las capitales, porque atienden el mayor número de usuarios del país.'},
'SED-11': {
  'no tiene ninguna responsabilidad, porque el trabajador no es su empleado.': 'no tiene ninguna responsabilidad, porque el trabajador está vinculado al contratista, que es el único empleador obligado frente al SG-SST.',
  'debe declarar la caducidad automáticamente.': 'debe declarar la caducidad del contrato de forma automática, porque el accidente prueba el incumplimiento grave del contratista.',
  'debe pagar la incapacidad del trabajador directamente.': 'debe pagar directamente la incapacidad del trabajador y luego descontarla de las actas de obra del contratista.'},
'SED-12': {
  'ningún trámite, porque se trata del mismo inmueble.': 'ningún trámite urbanístico, porque se trata del mismo inmueble y no se aumenta el área construida.',
  'solo un aviso a la alcaldía local.': 'un aviso a la alcaldía local con los planos del reforzamiento.',
  'únicamente la aprobación del comité directivo de la entidad.': 'la aprobación del comité directivo y del interventor de la obra.'}
};
/* Segunda pasada: casos residuales del núcleo específico. Las claves son los textos de la primera pasada;
   se encadenan para que el texto original apunte directamente al texto final. */
(function (segunda) {
  Object.keys(segunda).forEach(id => {
    const prim = window.OPCT[id] || (window.OPCT[id] = {});
    Object.keys(segunda[id]).forEach(t1 => {
      const orig = Object.keys(prim).find(k => prim[k] === t1);
      prim[orig || t1] = segunda[id][t1];
    });
  });
})({
'INM-10': {'cualquier profesional que conozca el sector inmobiliario de la zona y presente referencias de transacciones recientes.': 'cualquier profesional que conozca el sector inmobiliario de la zona, presente referencias de transacciones recientes y firme el informe bajo la gravedad de juramento.'},
'ESB-09': {'el contratista mantenga vigente otro contrato con la entidad.': 'el contratista mantenga vigente otro contrato con la entidad, para que la reclamación se tramite dentro de esa relación contractual.'},
'ESB-10': {'unir dos cuerpos de la edificación para que trabajen como una sola estructura ante cargas sísmicas.': 'unir rígidamente dos cuerpos de la edificación para que trabajen como una sola estructura ante cargas sísmicas y de viento, evitando el golpeteo.'},
'SUE-02': {'romper a compresión una muestra cilíndrica de suelo extraída del sondeo.': 'romper a compresión inconfinada una muestra cilíndrica de suelo extraída del sondeo con tubo de pared delgada.'},
'SUE-04': {'limos orgánicos de baja plasticidad.': 'limos orgánicos de baja plasticidad y alta permeabilidad.'},
'SUE-09': {'la estación del año en que se haga la exploración y el nivel freático observado.': 'la estación del año en que se haga la exploración, el nivel freático observado y la disponibilidad de equipos de perforación.'},
'SUE-10': {'rellenar parcialmente la excavación con material de la obra y subir la cota del sótano para evitar el agua.': 'rellenar parcialmente la excavación con material seleccionado de la obra y subir la cota del sótano, para evitar el contacto con el agua sin modificar el diseño.'},
'PRY-11': {'definir la curva de resistencia del concreto a lo largo del tiempo de curado.': 'definir la curva de ganancia de resistencia del concreto a lo largo del tiempo de curado, para programar el desencofrado.'},
'SED-01': {'que los trabajadores usen casco y botas, porque el reglamento de trabajo en alturas solo aplica a partir de 5 m de altura.': 'que los trabajadores usen casco, botas y guantes de seguridad, porque el reglamento de trabajo en alturas solo se aplica a labores realizadas a partir de 5 m de altura.'},
'SED-02': {'el Decreto 1499 de 2017 y el Manual Operativo del MIPG.': 'el Decreto 1499 de 2017 y la dimensión de talento humano del Manual Operativo del MIPG.'},
'SED-09': {'el número de puestos de trabajo y la distribución de los equipos de cómputo y las impresoras.': 'el número de puestos de trabajo, la distribución de los equipos de cómputo y la ubicación de las impresoras y del archivo de gestión de la dependencia.'},
'SED-10': {'atender primero las sedes que hayan presentado más solicitudes formales en el último año, porque reflejan la mayor necesidad.': 'atender primero las sedes que hayan presentado más solicitudes formales de mantenimiento en el último año, porque el volumen de solicitudes refleja con objetividad la mayor necesidad.'}
});

/* Ítems comportamentales: se desarrolla una opción de menor ajuste para que la de máximo ajuste no sea siempre la más larga. */
window.OPCT_C = {
'C388-RES-01': {'informa verbalmente al coordinador de la sede para que él decida si reporta el daño a la División cuando lo considere necesario.': 'informa verbalmente al coordinador de la sede y le recomienda revisar las cubiertas, para que él decida si reporta el daño a la División cuando lo considere necesario.'},
'C388-ORG-01': {'divide los procesos, asigna uno a cada profesional y se queda con el más complejo, revisando todo al final antes de radicar.': 'divide los procesos, asigna uno a cada profesional según su experiencia y se queda con el más complejo, revisando los tres documentos al final antes de radicarlos.'},
'C388-ORG-03': {'aprueba el informe y pide que la diferencia se ajuste en el acta del mes siguiente, para no retrasar el pago al contratista.': 'aprueba el informe y pide por correo que la diferencia de cantidades se ajuste en el acta del mes siguiente, para no retrasar el pago al contratista ni el avance de la obra.'},
'C388-ORG-05': {'espera a que el contratista solicite la prórroga, porque es él quien debe sustentar las causas del retraso en la ejecución.': 'espera a que el contratista solicite formalmente la prórroga, porque es él quien debe sustentar con soportes las causas del retraso en la ejecución de la obra.'},
'C388-INV-01': {'consulta la opinión de los jefes de las dependencias y presenta la recomendación de la mayoría como conclusión del análisis.': 'consulta mediante una encuesta la opinión de los jefes de las dependencias que ocupan cada sede y presenta la recomendación de la mayoría como conclusión del análisis.'},
'C388-INV-03': {'reutiliza el concepto elaborado para una sede de clima frío hace cuatro años, actualizando las fechas y los nombres de las sedes.': 'reutiliza el concepto elaborado para una sede de clima frío hace cuatro años, actualizando las fechas, los nombres de las sedes y los precios de referencia.'},
'C388-INV-05': {'pregunta a un colega de otra entidad cómo lo hacen allá y transcribe sus recomendaciones en un documento.': 'pregunta a un colega de otra entidad pública cómo gestionan allá el mantenimiento de sus edificios y transcribe sus recomendaciones en un documento.'},
'C388-PC-01': {'presenta el informe técnico completo de vulnerabilidad, con los cálculos y las tablas, para que el comité revise todo el detalle.': 'presenta el informe técnico completo de vulnerabilidad, con los cálculos, las tablas y los modelos, para que el comité revise todo el detalle antes de decidir.'},
'C388-PC-03': {'propone una impermeabilización inmediata de toda la cubierta, porque es la solución técnica más conocida para este tipo de daños.': 'propone una impermeabilización inmediata de toda la cubierta con un sistema de alta durabilidad, porque es la solución técnica más conocida para este tipo de daños.'},
'C388-PC-05': {'responde que las entidades públicas no necesitan licencia, para agilizar el inicio de la obra que la sede necesita con urgencia.': 'responde que las entidades públicas no necesitan licencia para obras en sus propias sedes, para agilizar el inicio de la obra que la sede necesita con urgencia.'},
'C388-OR-01': {'reporta el cumplimiento de la meta y dedica el resto del año a las tareas ordinarias de la División.': 'reporta el cumplimiento anticipado de la meta en el informe de gestión y dedica el resto del año a las tareas ordinarias que tiene asignadas en la División.'},
'C388-OR-02': {'informa que la obra se suspende hasta que llegue el ascensor y deja constancia de que el retraso es del proveedor.': 'informa por escrito que la obra se suspende hasta que llegue el ascensor y deja constancia de que el retraso es responsabilidad exclusiva del proveedor del equipo.'},
'C388-OR-03': {'explica a su jefe, con base en la experiencia, por qué la meta no es alcanzable y propone mantener los tiempos actuales.': 'explica a su jefe, con base en la experiencia del equipo en vigencias anteriores, por qué la meta no es alcanzable y propone mantener los tiempos actuales.'},
'C388-PAR-01': {'acepta iniciar solo las actividades más urgentes y pide al contratista que espere el pago hasta que se firme el contrato.': 'acepta iniciar solo las actividades más urgentes para proteger a los usuarios y pide al contratista que espere el pago hasta que se firme y legalice el contrato.'},
'C388-PAR-04': {'rechaza cualquier cambio de material sin estudiarlo, porque las especificaciones nunca pueden modificarse.': 'rechaza cualquier cambio de material sin estudiarlo, porque las especificaciones técnicas del contrato nunca pueden modificarse durante la ejecución de la obra.'},
'C388-PAR-05': {'acepta, porque así se evita un proceso más largo y la sede puede atenderse antes de que termine la vigencia.': 'acepta la propuesta, porque así se evita un proceso más largo y la sede puede atenderse antes de que termine la vigencia presupuestal.'},
'C388-CRE-01': {'sigue atendiendo las solicitudes según lleguen, porque el volumen actual todavía puede manejarse con el equipo existente.': 'sigue atendiendo las solicitudes según lleguen por cada canal, porque el volumen actual todavía puede manejarse con el equipo existente de la División.'},
'C388-CRE-03': {'pide más personal para poder elaborar los estudios previos con mayor rapidez.': 'pide a la dirección más personal de apoyo para poder elaborar los estudios previos con mayor rapidez y sin afectar las demás funciones de la División.'},
'C388-CRE-05': {'recomienda esperar a tener presupuesto para instalar paneles solares en todas las sedes de la entidad.': 'recomienda esperar a tener presupuesto de inversión para instalar paneles solares en todas las sedes de la entidad, que es la solución de mayor impacto a largo plazo.'}
};
