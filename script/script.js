const cursor = document.querySelector(".cursor");
const canvasTag = document.querySelector("canvas.in");

const moveCursor = (x, y) => {
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};

const setupCanvas = (canvas) => {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;
  const dpi = window.devicePixelRatio;

  canvas.width = canvasWidth * dpi;
  canvas.height = canvasHeight * dpi;
  canvas.style.width = canvasWidth + "px";
  canvas.style.height = canvasHeight + "px";

  const context = canvas.getContext("2d");

  context.scale(dpi, dpi);
  context.fillStyle = "red";
  context.rect(100, 100, 1000, 700);
  context.fill();
};

setupCanvas(canvasTag);

const growCursor = () => {
  cursor.classList.add("is-down");
  cursor.innerHTML = `<span>Let go please!</span>`;
};

const shrinkCursor = () => {
  cursor.classList.remove("is-down");
  cursor.innerHTML = `<span>Click me!</span>`;
};

document.addEventListener("mousemove", (event) => {
  moveCursor(event.pageX, event.pageY);
});

document.addEventListener("mousedown", () => {
  growCursor();
});
document.addEventListener("mouseup", () => {
  shrinkCursor();
});
