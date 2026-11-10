/* =========================================================================
   Configuración del concurso – PGN Convocatoria 388-2026
   Asesor 1AS-19 · División Administrativa · Proceso: Administración de
   Recursos y Seguridad – Adquisición de Bienes y Servicios.
   Fuentes: Ficha del cargo (TH-F-211 v3, Conv. 388 v1, Res. 243 de 2026),
   Res. 076/2026 (arts. 18-21), Res. 133/2026 (antecedentes),
   Diccionario de Competencias Comportamentales PGN (2012),
   Guías de orientación al aspirante de la Universidad de Antioquia.
   ========================================================================= */
window.BANCO = [];
window.BANCO_COMP = [];

/* Ítem de conocimientos (formato UdeA). Los ítems cuyo eje no esté en EJES se descartan:
   así pueden reutilizarse archivos de banco de otras convocatorias (p. ej., la 217). */
window.Q = function (id, eje, dif, dim, e, o, c, j, r) {
  if (!window.EJES[eje]) return;
  const ov = window.OPC && window.OPC[id];
  if (ov) { o = o.slice(); Object.keys(ov).forEach(k => { if (+k !== c && o[+k] != null) o[+k] = ov[k]; }); }
  // Reemplazos por texto (js/ajuste388.js): nunca tocan la opción correcta.
  const ot = window.OPCT && window.OPCT[id];
  if (ot) { o = o.map((x, i) => (i !== c && ot[x]) ? ot[x] : x); }
  let h = 0; for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const t = h % 4;
  if (t !== c) {
    o = o.slice(); j = j.slice();
    [o[t], o[c]] = [o[c], o[t]]; [j[t], j[c]] = [j[c], j[t]];
    c = t;
  }
  window.BANCO.push({ id, eje, dif, dim, e, o, c, j, r });
};
/* Ítem comportamental: id, competencia, enunciado, opciones[3], puntajes[3] (2=máximo ajuste,1=parcial,0=bajo), justificaciones[3] */
window.C = function (id, comp, e, o, p, j) {
  if (!window.COMPETENCIAS[comp]) return;
  const ov = window.OPC_C && window.OPC_C[id];
  if (ov) { o = o.slice(); Object.keys(ov).forEach(k => { if (p[+k] !== 2 && o[+k] != null) o[+k] = ov[k]; }); }
  const ot = window.OPCT_C && window.OPCT_C[id];
  if (ot) { o = o.map((x, i) => (p[i] !== 2 && ot[x]) ? ot[x] : x); }
  window.BANCO_COMP.push({ id, comp, e, o, p, j });
};

window.CONCURSO = {
  storageKey: 'pgn388_v1',
  nombre: 'Concurso Abierto de Méritos PGN 2026',
  convocatoria: 'Convocatoria 388-2026',
  cargo: 'Asesor 1AS-19',
  dependencia: 'División Administrativa (bienes inmuebles, obras y sedes)',
  operador: 'Universidad de Antioquia',
  nivel: 'asesor',
  reqMin: 'título en ingeniería civil, posgrado relacionado y 1 año de experiencia profesional',
  minimo: 65,
  pesos: { conocimientos: 70, comportamental: 20, antecedentes: 10 },
  umbralElegibles: 70,
  duracionMin: 240,
  enfoque: 'Las preguntas de la UdeA se contextualizan en las funciones del empleo: asesorar en políticas, planes y proyectos de la dependencia; asesorar en los temas de bienes inmuebles; evaluar la necesidad de adquirir, arrendar o contratar obras; gestionar el proceso contractual (estudios previos, conceptos, actos administrativos, evaluación de ofertas); implementar con otras dependencias los programas de seguridad y salud en el trabajo; preparar proyectos, planos y diseños de remodelación, ampliación, construcción y conservación de sedes; emitir conceptos técnicos; llevar el inventario y control de los inmuebles propios y arrendados; responder peticiones; hacer seguimiento a los contratos y orientar los sistemas de gestión. Al estudiar cada norma, pregúntese: <i>¿cómo aparecería esto en un caso de la División Administrativa de la PGN, con una sede que hay que adecuar, arrendar o reforzar?</i>',
  estado: {
    corte: '10 de noviembre de 2026',
    portal: 'www.meritoconstruyendoexcelencia.com.co',
    etapa: 'Reclutamiento – verificación de requisitos mínimos (reclamaciones y apelaciones en trámite). Aún no hay citación ni fecha para las pruebas escritas.',
    cronograma: [
      ['Fijación de la Convocatoria 388', '2 de septiembre de 2026 (Res. 243 de 2026)'],
      ['Inscripciones (cerradas)', '7 al 18 de septiembre de 2026'],
      ['Lista de admitidos y no admitidos', '30 de octubre de 2026'],
      ['Reclamaciones contra la lista', '3 y 4 de noviembre de 2026'],
      ['Lista DEFINITIVA de admitidos', '30 de noviembre de 2026 (según cronograma de VRM)'],
      ['Pruebas escritas (conocimientos y comportamental, el mismo día)', 'Por definir – pendiente la Guía de Orientación']
    ],
    notas: [
      'Un (1) cargo en Bogotá, planta global. Asignación básica $10.403.514 (vigencia 2025).',
      'La convocatoria se abrió por orden del Tribunal Administrativo de Cundinamarca (Auto 358 del 26 de agosto de 2026). El cargo pertenece a la planta transitoria creada por el Decreto 2247 de 2011 y prorrogada por la Ley 2078 de 2021 hasta el 10 de junio de 2031: el nombramiento queda sujeto a esa vigencia.',
      'Reglas: Res. 076 de 2026, modificada por las Res. 108, 133, 212 y 243 de 2026. Conocimientos eliminatoria (65/100, 70%), comportamental 20%, antecedentes 10%; elegibles con 70 o más.',
      'Con un solo cargo, el desempate (art. 35 Res. 076) puede ser decisivo: víctima; mayor puntaje en conocimientos; haber votado; discapacidad; judicatura en casas de justicia; decisión del Procurador.'
    ]
  },
  /* Res. 133 de 2026, arts. 28 y 29: la misma tabla aplica a los niveles asesor, ejecutivo y profesional.
     esp y prof: valores leídos de una versión OCR poco legible; confírmelos en la resolución. */
  antecedentes: { maxEdu: 50, maxExp: 50, doc: 50, mae: 25, esp: 10, prof: 4, anio: 10, maxEsp: 2, maxMae: 1,
    docencia: [[97, 30], [79, 25], [61, 20], [43, 15], [24, 10]] }
};

window.NUCLEOS = {
  general: 'Núcleo general (conocimientos esenciales comunes)',
  especifico: 'Núcleo específico (conocimientos esenciales específicos)'
};

window.EJES = {
  estado:        { n: 'Gestión pública y funcionamiento del Estado', nucleo: 'general', ic: '🏛️' },
  pgn:           { n: 'Estructura y funciones de la PGN', nucleo: 'general', ic: '⚖️' },
  atencion:      { n: 'Atención al usuario y derecho de petición', nucleo: 'general', ic: '🤝' },
  documental:    { n: 'Gestión documental y documentos de oficina', nucleo: 'general', ic: '🗂️' },
  sistemas:      { n: 'Sistemas de gestión (MIPG, calidad, seguridad)', nucleo: 'general', ic: '🔁' },
  ofimatica:     { n: 'Herramientas ofimáticas', nucleo: 'general', ic: '💻' },
  contratacion:  { n: 'Contratación estatal', nucleo: 'especifico', ic: '📑' },
  interventoria: { n: 'Interventoría y supervisión', nucleo: 'especifico', ic: '🦺' },
  presupuesto:   { n: 'Presupuesto público', nucleo: 'especifico', ic: '💰' },
  inmobiliaria:  { n: 'Administración inmobiliaria', nucleo: 'especifico', ic: '🏢' },
  estructural:   { n: 'Proyecto estructural (NSR-10)', nucleo: 'especifico', ic: '🏗️' },
  licencias:     { n: 'Diseño de obras y licencias de construcción', nucleo: 'especifico', ic: '📋' },
  arquitectonico:{ n: 'Diseño arquitectónico', nucleo: 'especifico', ic: '📐' },
  estabilidad:   { n: 'Estabilidad de obras y patologías', nucleo: 'especifico', ic: '🧱' },
  suelos:        { n: 'Estudio de suelos (geotecnia)', nucleo: 'especifico', ic: '⛏️' },
  proyectos:     { n: 'Formulación y evaluación de proyectos', nucleo: 'especifico', ic: '📈' },
  sedes:         { n: 'Adecuación y reestructuración de sedes', nucleo: 'especifico', ic: '🔧' }
};

window.DIMENSIONES = {
  recordar:   'Recordar: dominio de normas, conceptos, métodos o marcos de referencia.',
  comprender: 'Comprender: explicar relaciones entre datos o principios de una clasificación.',
  aplicar:    'Aplicar: seleccionar y usar datos y principios para resolver un problema concreto.',
  analizar:   'Analizar: descomponer un caso en sus partes y resolver problemas complejos.'
};

/* Competencias de la ficha del cargo, con definición y nivel del Diccionario de Competencias PGN. */
window.COMPETENCIAS = {
  responsabilidad: {
    n: 'Responsabilidad con la organización', nivel: 'B', tipo: 'Transversal',
    def: 'Capacidad de asumir compromiso con los objetivos de la Procuraduría General de la Nación o aquellos que le son asignados.',
    nivelTxt: 'Nivel B – Contribuye al desarrollo de los objetivos de la entidad y propone estrategias de mejoramiento continuo.',
    conductas: ['Enfoca su actividad hacia el cumplimiento de los objetivos de la institución.', 'Busca permanentemente la mejora de los procesos institucionales.']
  },
  organizacion: {
    n: 'Organización del trabajo', nivel: 'B', tipo: 'Transversal',
    def: 'Capacidad de organización, excelencia y precisión en la realización de labores.',
    nivelTxt: 'Nivel B – Efectúa su trabajo con organización, calidad, oportunidad, seguimiento y verificación de sus labores y las de los demás.',
    conductas: ['Cumple con las normas establecidas para el desarrollo de las actividades a su cargo.', 'Implementa herramientas de control y seguimiento para vigilar el cumplimiento con calidad de las tareas asignadas al equipo.']
  },
  investigacion: {
    n: 'Investigación', nivel: 'B', tipo: 'Por perfil del cargo',
    def: 'Capacidad para buscar información relevante y pertinente para analizarla y evaluarla con dominio técnico y experticia.',
    nivelTxt: 'Nivel B – Diseña y realiza estudios conjuntamente para facilitar el funcionamiento de la entidad y proponer planes y programas de mejoramiento institucional.',
    conductas: ['Incorpora elementos en la búsqueda de métodos aplicables a la investigación.', 'Realiza alianzas con instituciones educativas reconocidas para desarrollar nuevos modelos de investigación.']
  },
  conceptual: {
    n: 'Pensamiento conceptual', nivel: 'A', tipo: 'Por perfil del cargo',
    def: 'Capacidad de entender una situación o un problema a partir de los elementos que la conforman.',
    nivelTxt: 'Nivel A (máximo) – Explica problemas de alta complejidad y formula directrices para atenderlos.',
    conductas: ['Aclara situaciones o problemas que requieren rigurosidad técnica y conceptual.', 'Genera lineamientos claros y precisos que permiten entender situaciones o problemas específicos.']
  },
  resultados: {
    n: 'Orientación a resultados', nivel: 'A', tipo: 'Por perfil del cargo',
    def: 'Capacidad de lograr las metas propuestas alineadas con la estrategia corporativa o con la misión de la entidad.',
    nivelTxt: 'Nivel A (máximo) – Establece, alcanza y supera los resultados esperados de metas desafiantes en la entidad.',
    conductas: ['Fija metas que trascienden los propósitos actuales.', 'Compromete recursos y tiempos para mejorar las metas establecidas.']
  },
  parametros: {
    n: 'Cumplimiento de parámetros de trabajo', nivel: 'B', tipo: 'Por perfil del cargo',
    def: 'Capacidad para aplicar en sus labores la normatividad interna o externa.',
    nivelTxt: 'Nivel B – Aplica criterios con el fin de desempeñarse dentro de procesos organizacionales.',
    conductas: ['Sigue las reglas y lineamientos establecidos para el desempeño dentro de diferentes procesos organizacionales.', 'Define objetivos para su equipo alineados con procedimientos definidos.']
  },
  creatividad: {
    n: 'Creatividad e innovación', nivel: 'C', tipo: 'Por perfil del cargo',
    def: 'Capacidad para descubrir, inventar y proponer nuevas ideas o ideas originales aplicables en la organización.',
    nivelTxt: 'Nivel C – Diseña nuevos procedimientos para realizar sus funciones.',
    conductas: ['Crea nuevas formas de trabajo a partir del perfeccionamiento o adaptación de las mejores prácticas de trabajo conocidas.', 'Pone a prueba los nuevos procedimientos que surjan del proceso de perfeccionamiento de las prácticas en el trabajo.']
  }
};

window.FICHAS = {
  estado: ['C.P. arts. 113-121: ramas del poder, órganos autónomos e independientes; organismos de control (Ministerio Público y Contraloría).', 'Ley 489 de 1998: estructura de la administración; delegación (arts. 9-12), desconcentración y descentralización.', 'C.P. art. 209: principios de la función administrativa.', 'C.P. art. 125 y Ley 909 de 2004; régimen especial de carrera de la PGN (Decreto Ley 262 de 2000).', 'Planeación (Ley 152 de 1994), indicadores de eficacia, eficiencia y efectividad; control interno (Ley 87 de 1993).'],
  pgn: ['C.P. arts. 118, 275-278: Ministerio Público, elección y funciones del Procurador.', 'Decreto Ley 262 de 2000 modificado por el Decreto Ley 1851 de 2021: estructura de la PGN (Secretaría General, División Administrativa, etc.).', 'Ley 1952 de 2019 modificada por la Ley 2094 de 2021; Sentencia C-030 de 2023.', 'Planta transitoria: Decreto 2247 de 2011, Sentencia C-172 de 2017 y Ley 2078 de 2021 (vigencia hasta el 10 de junio de 2031).'],
  atencion: ['C.P. art. 23 y Ley 1755 de 2015: términos de 15, 10 y 30 días; peticiones incompletas, verbales y entre autoridades.', 'Atención prioritaria, lenguaje claro, ajustes razonables (Ley 1618 de 2013).'],
  documental: ['Ley 594 de 2000; ciclo vital; TRD, TVD, PGD, PINAR, FUID.', 'Expediente electrónico; Acuerdo AGN 001 de 2024 (Acuerdo Único de la Función Archivística).', 'Documentos de oficina: GTC 185 (cartas, memorandos, actas, circulares).', 'Archivo técnico de obras: planos récord (as built), bitácora de obra, actas y manuales de mantenimiento.'],
  sistemas: ['MIPG (Decreto 1499 de 2017): 7 dimensiones; FURAG; líneas de defensa.', 'ISO 9001, PHVA, acciones correctivas; gestión del riesgo (guía DAFP).', 'SG-SST (Decreto 1072 de 2015; Res. 0312 de 2019) y gestión ambiental (ISO 14001) en obras y sedes.'],
  ofimatica: ['Excel: referencias absolutas, BUSCARX, SUMAR.SI.CONJUNTO, tablas dinámicas, DIAS.LAB.', 'Presupuestos de obra en hoja de cálculo: cantidades × precios unitarios, AIU, redondeo.', 'Word: estilos, tablas de contenido, combinación de correspondencia, control de cambios.'],
  contratacion: ['Ley 80 de 1993, Ley 1150 de 2007, Ley 1474 de 2011, Decreto 1082 de 2015, Ley 1882 de 2018, Ley 2022 de 2020 (documentos tipo), Ley 2195 de 2022.', 'Obra pública: licitación como regla; interventoría obligatoria en obras licitadas (Ley 80, art. 32 par. 1); anticipo máximo 50 % y patrimonio autónomo (Ley 1474, art. 91).', 'Garantías (Decreto 1082): seriedad, cumplimiento, buen manejo del anticipo, estabilidad y calidad de la obra (mínimo 5 años), responsabilidad civil extracontractual.', 'Arrendamiento y adquisición de inmuebles: contratación directa (Ley 1150, art. 2 num. 4 lit. i) con estudio de mercado o avalúo.', 'Modificación, adición (máx. 50 % en SMMLV), suspensión y liquidación (Ley 1150, art. 11).'],
  interventoria: ['Ley 1474 de 2011, arts. 82-85: responsabilidad de interventores; supervisión vs. interventoría; deber de informar incumplimientos; prórroga de la interventoría.', 'Interventoría = consultoría: se contrata por concurso de méritos.', 'El interventor no puede modificar el contrato ni exonerar al contratista; las modificaciones las suscriben las partes.', 'Documentos de control: acta de inicio, bitácora, informes, actas de suspensión y reinicio, acta de recibo final, acta de liquidación.', 'Guía para el ejercicio de las funciones de supervisión e interventoría (Colombia Compra Eficiente).'],
  presupuesto: ['Decreto 111 de 1996 (Estatuto Orgánico del Presupuesto): principios (planificación, anualidad, universalidad, unidad de caja, programación integral, especialización, inembargabilidad, coherencia macroeconómica, homeóstasis).', 'Composición: rentas, gastos (funcionamiento, servicio de la deuda, inversión) y disposiciones generales.', 'Ejecución: CDP → compromiso → registro presupuestal (RP) → obligación → pago; PAC.', 'Reservas presupuestales y cuentas por pagar; vigencias futuras (Ley 819 de 2003); prohibición de hechos cumplidos.', 'Proyectos de inversión registrados en el Banco de Proyectos (BPIN) con MGA.'],
  inmobiliaria: ['Inventario y control de inmuebles propios, arrendados y en comodato; avalúos (IGAC, lonjas, peritos inscritos en el RAA).', 'Comodato de inmuebles públicos: solo a entidades públicas y organizaciones sin ánimo de lucro, máximo 5 años renovables (Ley 9 de 1989, art. 38).', 'Propiedad horizontal (Ley 675 de 2001): bienes comunes, coeficientes, expensas comunes.', 'Aseguramiento de bienes del Estado (Ley 42 de 1993, art. 107).', 'Mantenimiento preventivo, correctivo y predictivo; plan de mantenimiento; costo del ciclo de vida.'],
  estructural: ['Ley 400 de 1997 y NSR-10 (Decreto 926 de 2010): Títulos A a K.', 'Zonas de amenaza sísmica baja, intermedia y alta; Bogotá en zona intermedia.', 'Grupos de uso (A.2.5): IV indispensables (I = 1,50), III atención a la comunidad (1,25), II ocupación especial, incluidos los edificios gubernamentales (1,10), I ocupación normal (1,00).', 'Cargas muertas, vivas, combinaciones de carga; momento máximo de viga simplemente apoyada wL²/8.', 'Vulnerabilidad sísmica y reforzamiento estructural de edificaciones existentes.'],
  licencias: ['Decreto 1077 de 2015: licencias de urbanización, parcelación, subdivisión, construcción e intervención del espacio público.', 'Modalidades de licencia de construcción: obra nueva, ampliación, adecuación, modificación, restauración, reforzamiento estructural, demolición, reconstrucción y cerramiento.', 'Reparaciones locativas: no requieren licencia.', 'Expiden: curadores urbanos o la autoridad municipal competente. Vigencia (art. 2.2.6.1.2.4.1): obra nueva 36 meses y demás modalidades de construcción 24 meses, prorrogables una vez por 12; la prórroga se radica a más tardar 30 días hábiles antes del vencimiento, con manifestación juramentada de iniciación de obra.', 'Ley 388 de 1997: POT, PBOT y EOT. Ley 1796 de 2016: revisión independiente de diseños, supervisión técnica independiente y certificado técnico de ocupación.'],
  arquitectonico: ['Programa arquitectónico, zonificación y relaciones funcionales.', 'Índice de ocupación (huella / área del lote) e índice de construcción (área construida / área del lote).', 'Accesibilidad: Ley 361 de 1997, Ley 1618 de 2013 y NTC de accesibilidad al medio físico.', 'NSR-10 Títulos J y K: protección contra incendio, medios de evacuación.', 'Coordinación de diseños y BIM (detección de interferencias).'],
  estabilidad: ['Garantía de estabilidad y calidad de la obra (Decreto 1082 de 2015): no inferior a 5 años desde el recibo.', 'Responsabilidad decenal del constructor (Código Civil, art. 2060).', 'Patologías: fisuras por asentamiento diferencial, retracción, corrosión del refuerzo, humedades, eflorescencias.', 'Control de calidad del concreto: ensayos de cilindros a 28 días; asentamiento (slump).'],
  suelos: ['NSR-10 Título H: estudios geotécnicos preliminar y definitivo; exploración según la categoría de la unidad de construcción.', 'Ensayos: SPT, granulometría, límites de Atterberg (IP = LL − LP), humedad natural, consolidación, compresión inconfinada, Proctor.', 'Capacidad portante, asentamientos (inmediato y por consolidación), nivel freático.', 'Suelos problemáticos: arcillas expansivas, licuación de arenas sueltas saturadas.', 'Cimentaciones superficiales (zapatas, losas) y profundas (pilotes, caissons).'],
  proyectos: ['Metodología General Ajustada (MGA) del DNP; árbol de problemas y objetivos; marco lógico.', 'Evaluación financiera: VPN, TIR, relación beneficio/costo, periodo de recuperación.', 'Evaluación de alternativas y costo-eficiencia.', 'Programación: EDT, ruta crítica (CPM), holguras, curva S.', 'Presupuesto de obra: APU, costos directos e indirectos, AIU.'],
  sedes: ['Adecuación (cambio de uso) vs. reparaciones locativas vs. reforzamiento: qué requiere licencia.', 'Seguridad y salud en el trabajo en obras: SG-SST del contratista, trabajo en alturas (Res. 4272 de 2021: riesgo de caída mayor a 2,0 m).', 'Instalaciones: RETIE (eléctricas), RETILAP (iluminación), redes hidrosanitarias y de protección contra incendio.', 'Bienes de interés cultural: intervención con autorización de la autoridad competente (Ley 397 de 1997 modificada por Ley 1185 de 2008).', 'Plan de emergencias, señalización, rutas de evacuación y accesibilidad en sedes que atienden público.']
};

window.ESTILO_UDEA = [
  { t: 'Selección múltiple con única respuesta', d: 'Los ítems de conocimientos tienen un enunciado y cuatro opciones (A, B, C, D) con una sola correcta. En la prueba de la CGR 2024-2026 la UdeA aplicó 30 ítems de competencias básicas + 60 específicas + 40 comportamentales (130 en total) en máximo 4 horas.' },
  { t: 'Enunciado que se completa', d: 'El enunciado suele plantear un caso y terminar en una frase abierta («Ante esta situación, el asesor debe…»). Las opciones completan la frase y empiezan en minúscula.' },
  { t: 'Casos situados en el cargo', d: 'Para este empleo, espere casos de una sede que hay que arrendar, adecuar o reforzar; un contrato de obra con atrasos; una interventoría que no reporta; un estudio de suelos que no cumple; una licencia que vence.' },
  { t: 'Taxonomía de Bloom (Anderson & Krathwohl)', d: 'Cada ítem se construye desde una matriz con eje temático, nivel de dificultad (bajo, medio, alto) y dimensión cognitiva: recordar, comprender, aplicar y analizar. En los ejes técnicos aparecen cálculos sencillos (índices, momentos, VPN, IP).' },
  { t: 'Distractores con «porque…»', d: 'Las opciones incorrectas suelen ser plausibles y venir con una razón técnica o jurídica aparente. La trampa está en la justificación: ambas partes de la opción deben ser ciertas.' },
  { t: 'Opciones de longitud similar', d: 'No elija la opción más larga o más detallada por reflejo: en una prueba bien construida los distractores están tan desarrollados como la respuesta correcta. Este simulador sigue esa regla.' },
  { t: 'Comportamentales de 3 opciones (ipsativas)', d: 'Una situación laboral y tres opciones (A, B, C) con distinto nivel de ajuste a la competencia. Para este cargo se evalúan 7 competencias, incluida Creatividad e innovación (nivel C).' },
  { t: 'Calificación estandarizada', d: 'Lectura óptica y escala estándar de 0 a 100; la UdeA puede eliminar ítems defectuosos tras el análisis psicométrico. La pregunta sin responder vale cero.' },
  { t: 'Dos núcleos en la prueba de conocimientos', d: 'Art. 19 Res. 076 de 2026: núcleo general (común a todos los cargos) y núcleo específico (los 11 ejes técnicos de la ficha). Eliminatoria con 65/100.' }
];
