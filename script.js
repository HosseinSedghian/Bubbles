const bubbleSize = 50;
const bubbleCount = 10;

const bubbles = [];

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

for (let i = 0; i < bubbleCount; i++) {
    const newBox = document.createElement("div");
    newBox.className = "bubble";

    newBox.style.width = `${bubbleSize}px`;
    newBox.style.height = `${bubbleSize}px`;

    const bubbleColor = getRandomColor();
    newBox.style.background = `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), ${bubbleColor} 55%, rgba(0,0,0,0.15) 100%)`;

    const posX = getRandomBetween(0, window.innerWidth - bubbleSize);
    const posY = getRandomBetween(0, window.innerHeight - bubbleSize);

    const speedX = getRandomBetween(-1.5, 1.5);
    const speedY = getRandomBetween(-1.5, 1.5);

    bubbles.push({
        newBox: newBox,
        x: posX,
        y: posY,
        vx: speedX,
        vy: speedY,
    });

    document.body.appendChild(newBox);
}

function animate() {
    const maxX = window.innerWidth - bubbleSize;
    const maxY = window.innerHeight - bubbleSize;

    for (const bubble of bubbles) {
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;

        if (bubble.x <= 0) {
            bubble.x = 0;
            bubble.vx = -1 * bubble.vx;
        }
        if (bubble.x >= maxX) {
            bubble.x = maxX;
            bubble.vx = -1 * bubble.vx;
        }
        if (bubble.y <= 0) {
            bubble.y = 0;
            bubble.vy = -1 * bubble.vy;
        }
        if (bubble.y >= maxY) {
            bubble.y = maxY;
            bubble.vy = -1 * bubble.vy;
        }

        bubble.newBox.style.transform = `translate(${bubble.x}px, ${bubble.y}px)`;
    }

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
