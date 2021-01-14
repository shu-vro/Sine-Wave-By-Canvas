const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// y, length, amplitude, hue, frequency

let increscent = 0;
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = `rgba(0, 0, 0, .05)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, canvas.height / 2 + Math.sin(i * 0.01 + increscent) * 150 * Math.sin(increscent));
    }
    ctx.strokeStyle = `hsl(${Math.floor(Math.sin(increscent) * 360)}, 100%, 50%)`;
    increscent += .01;
    ctx.stroke();
}
animate();
