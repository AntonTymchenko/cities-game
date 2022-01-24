import { checkCities, alertOptions } from "./util.js";

let field = document.querySelector("#field");
let message = document.querySelector("#message");
let firstPlayer = document.querySelector("#player1");
let secondPlayer = document.querySelector("#player2");

const cities = [];
let witchTurn = true;
let player1 = 0;
let player2 = 0;

field.addEventListener("change", onInputChange);

function onInputChange(e) {
  witchTurn = !witchTurn;
  console.log("witchTurn", witchTurn);
  let city = e.currentTarget.value;
  if (!city.trim()) {
    e.currentTarget.value = "";
    alertOptions(message, "opacity", city);
  }
  if (!checkCities(cities, city)) {
    cities.push(city);
    e.currentTarget.value = "";
  } else {
    if (!witchTurn) {
      player1 += 1;
      firstPlayer.textContent = player1;
    } else {
      player2 += 1;
      secondPlayer.textContent = player2;
    }
    alertOptions(message, "opacity", city);
    e.currentTarget.value = "";
  }
}
