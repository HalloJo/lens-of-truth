const cursor = document.querySelector(".cursor");

const growCursor = () => {
  cursor.classList.add("is-down");
};

const shrinkCursor = () => {
  cursor.classList.remove("is-down");
};

const moveCursor = (x, y) => {
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};

document.addEventListener("mousedown", () => {
  growCursor();
});
document.addEventListener("mouseup", () => {
  shrinkCursor();
});
document.addEventListener("mousemove", (event) => {
  moveCursor(event.pageX, event.pageY);
});
