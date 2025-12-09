const signs = ['\u2648','\u2649','\u264A','\u264B','\u264C','\u264D','\u264E','\u264F','\u2650','\u2651','\u2652','\u2653'];
const total = 100;
const perRow = 15;
const container = document.getElementById('columns-container');

const specialSign = signs[Math.floor(Math.random() * signs.length)];

for (let start = 0; start < total; start += perRow) {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');
  const ul = document.createElement('ul');
  for (let i = start; i < Math.min(start + perRow, total); i++) {
    const li = document.createElement('li');
    let sign;
    if ((i + 1) % 9 === 0) {
      sign = specialSign;
    } else {
      sign = signs[Math.floor(Math.random() * signs.length)];
    }
    li.textContent = (i + 1) + ' — ' + sign;
    ul.appendChild(li);
  }
  rowDiv.appendChild(ul);
  container.appendChild(rowDiv);
}

const btn = document.getElementById('reveal-btn');
const big = document.getElementById('big-symbol');
const mainContent = document.querySelector('.main-content');
const resetBtnContainer = document.createElement('div'); // A reset gomb tárolására


btn.addEventListener('click', function() {
  // Deaktiváljuk a Kitalálom gombot
  btn.disabled = true;
  
  // Megjelenítjük a nagy szimbólumot
  big.textContent = specialSign;
  big.style.display = 'block';
  
  // Újrakezdem gomb létrehozása
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'A szádat becsukni... kattints ide az újrakezdéshez';
  resetBtn.style.marginTop = '20px'; // Kicsit lejjebb a gomb
  resetBtn.addEventListener('click', function() {
    window.location.reload(); // Oldal újratöltése
  });

  resetBtnContainer.appendChild(resetBtn);
  mainContent.appendChild(resetBtnContainer); // A reset gomb hozzáadása a main-content panelhez
});

