import {
  checkDoubleCities,
  alertOptions,
  checkFirstAndLastLetter,
  checkCityInArrForComputer,
  findCityForComputerMove,
  endGame,
  checkCityInComputerList,
} from "./utils.js";

import citiesArrForComputer from "./citiesNames.js";

const field = document.querySelector("#field");
const message = document.querySelector("#message");
const citiesList = document.querySelector("#citiesList");

let citiesArrForPlayer = [];
let citiesListOfComputerMoves = [];

field.addEventListener("change", onInputChange);

function onInputChange(e) {
  let city = e.currentTarget.value;

  if (
    !checkCityInComputerList(
      city,
      citiesArrForComputer,
      citiesListOfComputerMoves
    )
  ) {
    e.currentTarget.value = "";
    return;
  }
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
    citiesListOfComputerMoves.push(cityForComputerMove);
  } else {
    endGame(message, "opacity", city);
    setTimeout(() => {
      refreshGame(citiesList);
    }, 2000);

    return;
  }
  let citiesItem = document.createElement("li");
  citiesItem.textContent = cityForComputerMove;
  citiesList.appendChild(citiesItem);
}

function refreshGame(el) {
  const refreshGame = confirm(
    "Сыграем еще разок ? Только теперь я стану сильнее и возьму твои варианты городов ;)"
  );
  if (refreshGame) {
    citiesListOfComputerMoves.forEach((item) =>
      citiesArrForComputer.includes(item)
        ? null
        : citiesArrForComputer.push(item)
    );
    citiesArrForPlayer.forEach((item) =>
      citiesArrForComputer.includes(item)
        ? null
        : citiesArrForComputer.push(item)
    );
    citiesArrForPlayer = [];
    citiesListOfComputerMoves = [];
    el.innerHTML = "";
  }
}
