'use strict'
// Треба провалідувати поля у цій формі на вхідні дані при кліку на кнопку як на відео validateRegisterForm. 
// — Ім’я та прізвище: може бути слово англійською з великої або маленької букви і не більше 20. Цифр і інші символи не допускаються.
// — Емейл: обов'язково @. Усі букви повинні бути англійською. Загальні вимоги наступні(будь-яка кількість букв, цифр, тире і крапок@будьяка кількість букв.( net.ua, org.ua, gmail.com. і т.д.)).
// — Пароль: Від 8 до 15 символів можуть бути букви та цифри.
// — Чекбокс: якщо всі поля правильно заповнені, то при кліку на чекбокс кнопка Sign Up розблоковується
// — Sign Up: при кліку на дану кнопку відкривається модальне вікно з повідомленням про успішну реєстрацію
// — Start exploring: при кліку на дану кнопку закривається модальне вікно, а також всі поля форми зачищуються

function checkValue(pattern, element) {
    let variable = pattern.test(element.value);
    if (variable === true) {
        element.parentElement.classList.add('valid');
        element.classList.remove('shadow');
        element.parentElement.children[1].classList.add('hide');
        element.style.borderColor = 'forestgreen';
        if (document.querySelector('.alert-message')) {
            document.querySelector('.alert-message').remove();
        }
    }
    else {
        element.parentElement.classList.remove('valid');
        element.style.borderColor = '#ddd';
        element.parentElement.children[1].classList.remove('hide');
        element.classList.add('shadow');
        if (document.querySelector('.alert-message') == null) {
            let message = document.createElement('div');
            message.textContent = `Please provide a valid ${element.placeholder}`;
            message.classList.add('alert-message');
            element.parentElement.append(message);
        }
    }
    return variable;
}

let form = document.forms.signUpForm;
let che = document.querySelector('#prpol');

let nameg, surname, email, password;
let regName = /^[a-zA-Z]{3,20}$/;
let regUsEmail = /^\S{1,}@[a-z]{2,}\.[a-z]{2,}$/;
let regPass = /^\w{8,15}$/;

form.addEventListener('input', (e) => {
    if (e.target.id === 'fname') {
        nameg = checkValue(regName, e.target);
    }
    else if (e.target.id === 'sname') {
        surname = checkValue(regName, e.target);
    }
    else if (e.target.id === 'usemail') {
        email = checkValue(regUsEmail, e.target);
    }
    else if (e.target.id === 'uspassword') {
        password = checkValue(regPass, e.target);
    }
    if (che.checked === true && nameg === true && surname === true && email === true && password === true) {
        document.querySelector('.sign-button').disabled = false;
    }
});

console.log(nameg, surname);
document.querySelector('.sign-button').addEventListener('click', () => {
    document.querySelector('.welcome-overlay').classList.remove('hide');
});

document.querySelector('.start-exploring').addEventListener('click', () => {
    document.querySelector('.welcome-overlay').classList.add('hide');
    form.reset();
    document.querySelector('.sign-button').disabled = true;
    for (let i = 0; i < form.elements.length - 2; i++) {
        form.elements[i].parentElement.classList.remove('valid');
        form.elements[i].style.borderColor = '#ddd';
    }
});
