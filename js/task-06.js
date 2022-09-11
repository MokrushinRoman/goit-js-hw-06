// получить ссылку на инпут
const refs = {
  input: document.querySelector("#validation-input"),
};

// создаем переменную с требуемой длинной строки
const elLengthrequire = refs.input.dataset.length;
console.log("elLengthrequire", elLengthrequire);

refs.input.addEventListener("input", (event) => {
  console.log(event.currentTarget.value.length);
  console.log(event.currentTarget.value.length == elLengthrequire);
});

// создать событие блёр
refs.input.addEventListener("blur", (event) => {
  // если инпут.ленс !== дата-ленс, то добавдяем соответствуюющий класс

  if (event.currentTarget.value.length != elLengthrequire) {
    event.currentTarget.classList.add("invalid");
    if (event.currentTarget.classList.contains("valid")) {
      event.currentTarget.classList.remove("valid");
    }
  }

  //   в противном случае добавляем соотвтетсвующий класс
  if (event.currentTarget.value.length == elLengthrequire) {
    event.currentTarget.classList.add("valid");
    if (event.currentTarget.classList.contains("invalid")) {
      event.currentTarget.classList.remove("invalid");
    }
  }
});

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.

// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
