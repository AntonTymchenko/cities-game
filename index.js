import {
  checkDoubleCities,
  alertOptions,
  checkFirstAndLastLetter,
  checkCityInArrForComputer,
  findCityForComputerMove,
  endGame,
} from "./utils.js";

import citiesArrForComputer from "./citiesNames.js";

const field = document.querySelector("#field");
const message = document.querySelector("#message");
const citiesList = document.querySelector("#citiesList");

const citiesArrForPlayer = [];

field.addEventListener("change", onInputChange);

function onInputChange(e) {
  let city = e.currentTarget.value;
  if (!city.trim()) {
    alertOptions(message, "opacity", city, false, citiesArrForPlayer);
    e.currentTarget.value = "";
    return;
  }
  if (
    checkFirstAndLastLetter(citiesArrForPlayer, city) &&
    checkDoubleCities(citiesArrForPlayer, city)
  ) {
    citiesArrForPlayer.push(city);
    e.currentTarget.value = "";
    movesOfComp(citiesList, citiesArrForPlayer);
    return;
  }
  if (!checkFirstAndLastLetter(citiesArrForPlayer, city)) {
    alertOptions(message, "opacity", city, true, citiesArrForPlayer);
    e.currentTarget.value = "";
    return;
  }
  if (!checkDoubleCities(citiesArrForPlayer, city)) {
    alertOptions(message, "opacity", city, false, citiesArrForPlayer);
    e.currentTarget.value = "";
    return;
  }
}

function movesOfComp(citiesList, citiesArrForPlayer) {
  const city = citiesArrForPlayer[citiesArrForPlayer.length - 1];
  checkCityInArrForComputer(citiesArrForComputer, city);
  const cityForComputerMove = findCityForComputerMove(
    citiesArrForComputer,
    city
  );
  if (cityForComputerMove) {
    citiesArrForPlayer.push(cityForComputerMove);
  } else {
    endGame(message, "opacity", city);
    return;
  }
  let citiesItem = document.createElement("li");
  citiesItem.textContent = cityForComputerMove;
  citiesList.appendChild(citiesItem);
}
