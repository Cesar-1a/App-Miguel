# Simulador Mérito 2026 – PGN Convocatoria 388

Simulador de las pruebas escritas para la **Convocatoria 388-2026** de la Procuraduría General de la Nación:
**Asesor 1AS-19**, División Administrativa (bienes inmuebles, obras y sedes), 1 cargo en Bogotá.
Formato de preguntas de la Universidad de Antioquia.

## Cómo abrirlo
Doble clic en `index.html`. Funciona sin internet. El progreso se guarda en el navegador con una clave
propia (`pgn388_v1`), separada de la app de la Convocatoria 217.

## Banco
- Núcleo general: compartido con la 217 (`banco_general*.js`), porque los conocimientos comunes son los mismos.
- Contratación estatal: ítems de la 217 (`banco_especifico2.js`, `banco_especifico4.js`) más ítems de obra pública;
  los demás ejes de esos archivos se descartan solos porque no están en `EJES` de `config.js`.
- Núcleo específico propio (`banco388_a` a `banco388_d`): interventoría, presupuesto, administración inmobiliaria,
  NSR-10, licencias, diseño arquitectónico, estabilidad de obras, suelos, proyectos y adecuación de sedes.
- Comportamental (`banco388_comp.js`): 7 competencias de la ficha, incluida Creatividad e innovación (nivel C).
- Ampliación: `banco388_e.js`, `banco388_f.js` (conocimientos) y `banco388_comp2.js` (comportamental).
- `ajuste388.js` y `ajuste388b.js`: reescritura de distractores para que la opción correcta no sea siempre la más larga.

Banco actual: 343 ítems de conocimientos (131 núcleo general + 212 núcleo específico; detalle por eje en «Mis datos y banco») y 49 comportamentales (7 por competencia).
Al agregar un archivo nuevo, inclúyalo en `index.html` antes de `js/app.js`, y mida el sesgo de longitud antes de darlo por terminado.

Si se corrige un ítem compartido en la app 217, copie el archivo actualizado a `js/` de esta carpeta.
