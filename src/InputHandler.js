const heldKeys = new Set();

function handleKeyDown(e) {
  e.preventDefault();

  heldKeys.add(e.code);
}

function handleKeyUp(e) {
  e.preventDefault();

  heldKeys.delete(e.code);
}

export function registerKeyboardEvents() {
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
}

export const isKeyDown = (code) => heldKeys.has(code);
export const isKeyUp = (code) => !heldKeys.has(code);
