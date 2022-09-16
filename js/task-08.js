// получаю ссылки на
const refs = {
  form: document.querySelector(".login-form"),
};

// создать событие сабмит на форму
refs.form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  // создать event preventDefault
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email;
  const password = formElements.password;

  if (mail.value === "" || password.value === "") {
    alert("Заполните пожалуйста все пункты");
    return;
  }

  const formData = {
    mail: mail.value,
    password: password.value,
  };

  console.log("onSubmitForm ~ formData", formData);
  event.currentTarget.reset();

  /* 
 const currentTarget = event.currentTarget;

  // создать переменную с экземпляром класса формдата
  const formData = new FormData(currentTarget);

  formData.forEach((value, name) => {
    // выывести в отдельные переменные все поля для ввода для дальнейшей проверки на заполненности(либо же попробовать изначально сравнить их с пустой строкой)

    // если есть пустое поле то вывести алерт с предупреждением
    if (value === "") {
      alert(`Ну и? Почему не заполнил ${name}?`);
      return;
    }

    console.log({ name, value });
    curre
  }); 
  */
}

// Обработка отправки формы form.login-form должна быть по событию submit.

// При отправке формы страница не должна перезагружаться.

// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
