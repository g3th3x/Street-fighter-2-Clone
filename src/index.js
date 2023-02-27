import { StreetFighterGame } from "./StreetFighterGame.js";

window.addEventListener("load", () => {
  window.addEventListener(
    "click",
    () => {
      new StreetFighterGame().start();
    },
    { once: true }
  );
});
