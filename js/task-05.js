// получаем ссылку на инпут и спан
const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};
console.log(refs.nameInput.value);
// console.log(refs.nameOutput);

// фиксирую дефолтное значение из разметки для спана в перемаенной
const outputDefaultVal = refs.nameOutput.textContent;
// console.log(" outputDefaultVal", outputDefaultVal);

// создаем событие, чтобы при вводе в инпут значение спана равнялось ему
refs.nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "" || event.currentTarget.value === " ") {
    refs.nameOutput.textContent = outputDefaultVal;
  } else {
    refs.nameOutput.textContent = event.currentTarget.value;
  }
});
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
