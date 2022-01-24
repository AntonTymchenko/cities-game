import {
  checkDoubleCities,
  alertOptions,
  checkFirstAndLastLetter,
} from "./util.js";

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
  let city = e.currentTarget.value;
  if (!city.trim()) {
    alertOptions(message, "opacity", city, false, cities);
    e.currentTarget.value = "";
    return;
  }
  if (
    checkFirstAndLastLetter(cities, city) &&
    checkDoubleCities(cities, city)
  ) {
    cities.push(city);
    e.currentTarget.value = "";
    return;
  }
  if (!checkFirstAndLastLetter(cities, city)) {
    alertOptions(message, "opacity", city, true, cities);
    e.currentTarget.value = "";
    return;
  }
  if (!checkDoubleCities(cities, city)) {
    alertOptions(message, "opacity", city, false, cities);
    e.currentTarget.value = "";
    return;
  }
}
