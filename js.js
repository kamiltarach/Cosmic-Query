const canvas = document.getElementById('orbital-canvas');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 380;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const orbitRadius = 100;
const orbitSpeed = 0.02;

let angle = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const x = centerX + Math.cos(angle) * orbitRadius;
  const y = centerY + Math.sin(angle) * orbitRadius;

  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'blue';
  ctx.beginPath();
  ctx.arc(x, y, 8, 0, Math.PI * 2);
  ctx.fill();

  angle += orbitSpeed;
  requestAnimationFrame(draw);
}
draw();