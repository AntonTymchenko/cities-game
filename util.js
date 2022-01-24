export const checkCities = (arr, city) => {
  return arr.length === 0
    ? false
    : arr.some((item) => item.toLowerCase() === city.toLowerCase());
};

export const alertOptions = (el, className, city) => {
  setTimeout(() => {
    el.classList.add(`${className}`);
    el.textContent = "";
  }, 2000);
  el.classList.remove(`${className}`);
  if (city.trim()) {
    el.textContent = `Город под названием ${city} уже был, пропускаешь ход`;
  } else {
    el.textContent =
      "В следующий раз введите слово, а сейчас вы пропускаете ход";
  }

  return;
};
