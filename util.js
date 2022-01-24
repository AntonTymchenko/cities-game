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
