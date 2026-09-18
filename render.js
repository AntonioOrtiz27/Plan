/**
 * render.js — Construye las tarjetas del plan a partir de ROUTINE (data.js).
 * No hace falta editar este archivo para cambiar ejercicios: eso se hace en data.js.
 */

function renderRoutine() {
  const container = document.getElementById('week-plan');
  container.innerHTML = '';

  ROUTINE.forEach(day => {
    const card = document.createElement('div');
    card.className = 'day-card' + (day.categoria === 'rest' ? ' rest' : '');
    card.dataset.cat = day.categoria;

    let html = `<p class="day-name">${day.nombre}</p><p class="day-title">${day.titulo}</p>`;

    if (day.descanso) {
      html += `<p class="rest-copy">${day.descanso}</p>`;
    } else {
      html += '<ul>';
      day.ejercicios.forEach(ex => {
        html += `<li><span class="chip">${ex.chip}</span> ${ex.texto}</li>`;
      });
      html += '</ul>';
      if (day.nota) {
        html += `<p class="note">${day.nota}</p>`;
      }
    }

    card.innerHTML = html;
    container.appendChild(card);
  });
}

renderRoutine();
