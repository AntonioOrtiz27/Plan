# Plan de entrenamiento

## Cómo abrirlo
Doble clic en `index.html`. Se abre en el navegador, sin internet ni servidor.
(La tipografía de los títulos sí requiere internet para cargar la primera vez;
si no hay conexión, cae a una tipografía de reemplazo y todo lo demás funciona igual.)

## Estructura

```
plan-entrenamiento/
├── index.html        → esqueleto de la página (no hace falta tocarlo)
├── css/
│   └── styles.css     → estilos visuales (colores, layout, tipografía)
├── js/
│   ├── data.js         → ★ EDITAR ACÁ los ejercicios de cada día
│   ├── render.js       → arma las tarjetas a partir de data.js
│   └── calendar.js     → calendario + guardado de progreso (localStorage)
└── README.md
```

## Cómo cambiar los ejercicios
Todo lo editable vive en `js/data.js`, en el arreglo `ROUTINE`. Cada día es un
objeto con esta forma:

```js
{
  id: "martes",
  nombre: "MARTES",
  titulo: "Fuerza + core",
  categoria: "pitch",        // "pitch" | "clay" | "rest" — define el color
  ejercicios: [
    { chip: "3×20", texto: "sentadilla" },
    // agregá, borrá o modificá líneas acá
  ],
  nota: "texto opcional al pie de la tarjeta"
}
```

Para un día de descanso, en vez de `ejercicios` usá `descanso: "texto"`.

No hace falta tocar `render.js` ni `index.html` para que los cambios se vean —
`render.js` lee `ROUTINE` y arma el DOM automáticamente.

## Progreso guardado
Los tildes del calendario se guardan en el `localStorage` del navegador, bajo
claves con el formato `training:YYYY-MM-DD`. Si movés la carpeta de lugar
después de haber usado la app, el navegador puede no reconocerla como el mismo
origen y el progreso previo no se va a ver (queda guardado, pero asociado a la
ruta vieja). Conviene dejar la carpeta fija desde el principio.
