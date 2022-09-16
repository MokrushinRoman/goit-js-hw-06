// получаем ссылки на инпут и спан
const refs = {
  inputControler: document.querySelector("#font-size-control"),
  controlerExample: document.querySelector("#text"),
};
// console.log(refs.inputControler);
// console.log(refs.controlerExample);

// console.log((actionResult.style.fontSize = `${maxValue}px`));

// создаем событие change
refs.inputControler.addEventListener("input", (event) => {
  const actionValue = event.currentTarget.value;
  // добавляем спану стиль фонт-сайз в пикселях со значением, которое будет передаваться из ползунка
  refs.controlerExample.style.fontSize = `${actionValue}px`;
});

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
