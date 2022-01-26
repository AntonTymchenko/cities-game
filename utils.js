export let checkFirstAndLastLetter = (arr, city) => {
  if (arr.length === 0) {
    return true;
  }
  let word = arr[arr.length - 1];

  if (word && word[word.length - 1].toLowerCase() === city[0].toLowerCase())
    return word;
};

export const checkDoubleCities = (arr, city) => {
  if (arr.length === 0) {
    return true;
  }
  return !arr.some((item) => item.toLowerCase() === city.toLowerCase());
};

export const alertOptions = (el, className, city, letters = false, arr) => {
  setTimeout(() => {
    el.classList.add(`${className}`);
    el.textContent = "";
  }, 3000);
  el.classList.remove(`${className}`);
  if (city.trim() && !letters) {
    el.textContent = `Город под названием ${city} уже был!`;
    return;
  }
  if (city.trim() && letters) {
    el.textContent = `Первая буква ${city} и последняя буква крайнего города ${
      arr[arr.length - 1]
    } не совпадают`;
    return;
  } else {
    el.textContent = "В следующий раз введите слово!";
    return;
  }
};

export const checkCityInArrForComputer = (citiesArrForComputer, city) => {
  const index = citiesArrForComputer.findIndex(
    (item) => item.toLowerCase() === city.toLowerCase()
  );
  if (index !== -1) citiesArrForComputer.splice(index, 1);
};

export function findCityForComputerMove(citiesArrForComputer, city) {
  let cityForComputerMove = null;
  let index;
  for (let i = 0; i < citiesArrForComputer.length; i += 1) {
    if (
      citiesArrForComputer[i][0].toLowerCase() ===
      city[city.length - 1].toLowerCase()
    ) {
      cityForComputerMove = citiesArrForComputer[i];
      index = i;
      break;
    }
  }
  if (index) citiesArrForComputer.splice(index, 1);
  console.log("citiesArrForComputer", citiesArrForComputer);

  return cityForComputerMove;
}

export function endGame(el, className, city) {
  setTimeout(() => {
    el.classList.add(`${className}`);
    el.textContent = "";
  }, 5000);
  el.classList.remove(`${className}`);
  el.textContent = `Ты победил меня! Я не знаю больше городов на букву ${city[
    city.length - 1
  ].toUpperCase()}.`;
}

export function checkCityInComputerList(
  city,
  citiesArrForComputer,
  citiesListOfComputerMoves
) {
  const didMoveOfComputer = citiesListOfComputerMoves.some(
    (item) => item.toLowerCase() === city.toLowerCase()
  );
  const checkInNativeCitiesComputerList = citiesArrForComputer.some(
    (item) => item.toLowerCase() === city.toLowerCase()
  );
  if (
    !checkInNativeCitiesComputerList ||
    (!didMoveOfComputer && didMoveOfComputer.length)
  ) {
    const choice = confirm(
      `Вы уверенны, что такой город как ${city} существует  ?`
    );
    if (choice) {
      alert("Ок я тебе верю и засчитаю этот вариант");
    } else {
      alert("Спасибо за честность, можешь просто переходить");
      return false;
    }
    return choice;
  }
  return true;
}
