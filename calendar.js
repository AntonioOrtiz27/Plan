/**
 * calendar.js — Calendario mensual con guardado local (localStorage).
 * Independiente de data.js: no necesita saber qué ejercicios hay, solo
 * qué categoría (pitch/clay/rest/gold) corresponde a cada día de la semana.
 */

const MONTH_NAMES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const DOW_LABELS = ['L','M','X','J','V','S','D'];

const today = new Date();
let viewYear = today.getFullYear();
let viewMonth = today.getMonth();

function pad(n) { return n < 10 ? '0' + n : '' + n; }
function keyFor(y, m, d) { return `training:${y}-${pad(m + 1)}-${pad(d)}`; }

function getDone(key) {
  try { return localStorage.getItem(key) === '1'; } catch (e) { return false; }
}
function setDone(key, val) {
  try { localStorage.setItem(key, val ? '1' : '0'); } catch (e) {}
}

function renderCalendar() {
  const grid = document.getElementById('calGrid');
  grid.innerHTML = '';
  document.getElementById('monthLabel').textContent = `${MONTH_NAMES[viewMonth]} ${viewYear}`;

  DOW_LABELS.forEach(l => {
    const el = document.createElement('div');
    el.className = 'cal-dow';
    el.textContent = l;
    grid.appendChild(el);
  });

  const firstDay = new Date(viewYear, viewMonth, 1);
  const startOffset = (firstDay.getDay() + 6) % 7; // semana empieza en lunes
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  for (let i = 0; i < startOffset; i++) {
    const el = document.createElement('div');
    el.className = 'cal-cell empty';
    grid.appendChild(el);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(viewYear, viewMonth, d);
    const dow = dateObj.getDay();
    const key = keyFor(viewYear, viewMonth, d);
    const done = getDone(key);
    const isToday = dateObj.toDateString() === today.toDateString();

    const cell = document.createElement('div');
    cell.className = `cal-cell dow-${dow}` + (done ? ' done' : '') + (isToday ? ' today' : '');
    cell.innerHTML = `<span class="tick">✓</span><span class="num">${d}</span><span class="dot"></span>`;
    cell.addEventListener('click', () => {
      const nowDone = !getDone(key);
      setDone(key, nowDone);
      cell.classList.toggle('done', nowDone);
      renderWeekProgress();
    });
    grid.appendChild(cell);
  }
}

function renderWeekProgress() {
  const monday = new Date(today);
  const offset = (today.getDay() + 6) % 7;
  monday.setDate(today.getDate() - offset);

  let count = 0;
  for (let i = 0; i < 4; i++) { // lunes a jueves
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    if (getDone(keyFor(d.getFullYear(), d.getMonth(), d.getDate()))) count++;
  }
  document.getElementById('weekProgress').innerHTML = `<strong>${count}/4</strong> entrenamientos hechos esta semana (lun–jue)`;
}

document.getElementById('prevMonth').addEventListener('click', () => {
  viewMonth--; if (viewMonth < 0) { viewMonth = 11; viewYear--; }
  renderCalendar();
});
document.getElementById('nextMonth').addEventListener('click', () => {
  viewMonth++; if (viewMonth > 11) { viewMonth = 0; viewYear++; }
  renderCalendar();
});

renderCalendar();
renderWeekProgress();
