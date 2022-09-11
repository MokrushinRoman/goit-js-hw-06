// получть ссылку на кнопки и счетчик
const refs = {
  counter: document.querySelector("#value"),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
};
// console.log("counter", refs.counter.textContent);
// console.log("actionEls", refs.actions[1].dataset.action);

// создать начально значение счетчику
let counterValue = 0;
// console.log("counterValue", counterValue);

// создаем событие по клику с двумя условиями: если значение єкшн = инкремент, тогда добавляем 1 к счетчику. Если декремент - отнимаем 1
refs.incrementBtn.addEventListener("click", function () {
  counterValue += 1;
  refs.counter.textContent = counterValue;
});
refs.decrementBtn.addEventListener("click", function () {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
});

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
