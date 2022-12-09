const cursor = document.querySelector(".cursor");
const canvasTag = document.querySelector("canvas.in");

let isMouseDown = false;

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
  context.strokeStyle = "orange";
  context.lineCap = "round";
  context.lineWidth = "80";
  context.lineJoin = "round";
};

const startDraw = (canvas, x, y) => {
  const context = canvas.getContext("2d");

  const colors = ["red", "green", "blue", "brown"];
  const randomColor = Math.floor(Math.random() * colors.length);

  context.strokeStyle = colors[randomColor];

  context.moveTo(x, y);
  context.beginPath();
};

const moveDraw = (canvas, x, y) => {
  const context = canvas.getContext("2d");

  if (isMouseDown) {
    context.lineTo(x, y);
    context.stroke();
  }
};

setupCanvas(canvasTag);

const growCursor = () => {
  cursor.classList.add("is-down");
};

const shrinkCursor = () => {
  cursor.classList.remove("is-down");
};

document.addEventListener("mousemove", (event) => {
  moveCursor(event.pageX, event.pageY);
  moveDraw(canvasTag, event.pageX, event.pageY);
});

document.addEventListener("mousedown", (event) => {
  growCursor();
  startDraw(canvasTag, event.pageX, event.pageY);
  isMouseDown = true;
});
document.addEventListener("mouseup", () => {
  shrinkCursor();
  isMouseDown = false;
});
