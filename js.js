const canvas = document.getElementById('orbital-canvas');
const ctx = canvas.getContext('2d');

// Ustawiamy rozmiar canvas na 800x600 pikseli
canvas.width = 400;
canvas.height = 300;

// Inicjalizujemy parametry orbity
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const orbitRadius = 100;
const orbitSpeed = 0.01;

let angle = 0;

function draw() {
  // Czyścimy płótno
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Obliczamy pozycję ciała kosmicznego na orbicie
  const x = centerX + Math.cos(angle) * orbitRadius;
  const y = centerY + Math.sin(angle) * orbitRadius;

  // Rysujemy punkt centralny
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
  ctx.fill();

  // Rysujemy ciało kosmiczne na orbicie
  ctx.fillStyle = 'blue';
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();

  // Zwiększamy kąt o prędkość orbity
  angle += orbitSpeed;

  // Wywołujemy funkcję draw() ponownie, aby uzyskać animację
  requestAnimationFrame(draw);
}

// Wywołujemy funkcję draw(), aby rozpocząć animację
draw();
