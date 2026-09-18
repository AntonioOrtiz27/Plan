/**
 * data.js — Rutina de la semana.
 *
 * Este es el ÚNICO archivo que necesitás tocar para cambiar ejercicios,
 * series, repeticiones o textos. render.js lee este arreglo y arma las
 * tarjetas automáticamente, así que no hace falta editar HTML ni CSS.
 *
 * Cada día tiene:
 *   id         — identificador interno (no se muestra)
 *   nombre     — encabezado del día ("LUNES", "MARTES"...)
 *   titulo     — subtítulo del bloque de entrenamiento
 *   categoria  — "pitch" (entreno normal) | "clay" (alta intensidad) | "rest" (descanso) | "gold" (partido)
 *                controla el color de la tarjeta y del punto en el calendario
 *   ejercicios — lista de { chip, texto }. "chip" es el dato corto (series x reps,
 *                minutos, ritmo); "texto" es la descripción del ejercicio.
 *   nota       — (opcional) línea aclaratoria al pie de la tarjeta
 *   descanso   — (opcional, solo para días de descanso) reemplaza la lista de ejercicios
 */

const ROUTINE = [
  {
    id: "lunes",
    nombre: "LUNES",
    titulo: "Cardio base · 35'",
    categoria: "pitch",
    ejercicios: [
      { chip: "5'", texto: "Caminata" },
      { chip: "30'", texto: "Trote suave, ritmo conversación" },
      { chip: "FIN", texto: "Elongar" }
    ],
    nota: "Sesión para construir base aeróbica."
  },
  {
    id: "martes",
    nombre: "MARTES",
    titulo: "Fuerza + core · 40/50'",
    categoria: "pitch",
    ejercicios: [
      { chip: "3×20", texto: "puente de glúteo" },
      { chip: "3×8–12", texto: "sentadilla, con una dificultad que te exija (2–3 reps en reserva)" },
      { chip: "3×8–12", texto: "estocada (por pierna), con una dificultad que te exija (2–3 reps en reserva)" },
      { chip: "3×15", texto: "abdominales" },
      { chip: "3×12", texto: "elevación de psoas (por lado)" },
      { chip: "3×15", texto: "abs laterales (por lado)" },
      { chip: "FIN", texto: "Elongar" }
    ],
    nota: "Fuerza de verdad: menos repeticiones y más carga te sirve más para fútbol que series de 20."
  },
  {
    id: "miercoles",
    nombre: "MIÉRCOLES",
    titulo: "Cardio resistencia · 35'",
    categoria: "pitch",
    ejercicios: [
      { chip: "5'", texto: "Caminata" },
      { chip: "30'", texto: "trote continuo, ritmo algo más firme" },
      { chip: "FIN", texto: "Elongar" }
    ],
    nota: "35' es el tiempo que se juega por tiempo."
  },
  {
    id: "jueves",
    nombre: "JUEVES",
    titulo: "Velocidad + core · 30/35'",
    categoria: "clay",
    ejercicios: [
      { chip: "8–10'", texto: "trote suave" },
      { chip: "4×40–50m", texto: "progresiones al 60–70%" },
      { chip: "6×50m", texto: "al 80–85%" },
      { chip: "60–90\"", texto: "recuperación caminando entre repeticiones" },
      { chip: "3×15", texto: "abdominales" },
      { chip: "3×12", texto: "elevaciones de piernas" },
      { chip: "3×15", texto: "abdominales laterales (por lado)" },
      { chip: "5'", texto: "suave para terminar" },
      { chip: "FIN", texto: "Elongar" }
    ],
    nota: "Más adelante, tras varias semanas de adaptación, se puede pasar a esfuerzos del 90–95% y cambios de dirección."
  },
  {
    id: "viernes",
    nombre: "VIERNES",
    titulo: "Descanso",
    categoria: "rest",    
    ejercicios: [
      { chip: "70'", texto: "Caminata suave" },
    ],
    nota: "La caminata es opcional, ya que hay que descansar para el partido"
  },

  
  {
    id: "sabado",
    nombre: "SÁBADO",
    titulo: "Partido · 15:30",
    categoria: "gold",
    descanso: "⚽ Partido a las 15:30."
  }
];
