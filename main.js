'use strict'

function printRessult(button, taskNum, variable){
    button.addEventListener('click', () =>{
        console.log(`Завдання ${taskNum}.   Результат:`, variable);
        button.disabled = true;
    });
}

// Task 1
let sum = 0;
let arr1 = [5, 6, 7, 8, 9];

arr1.forEach(i =>  sum += i);
printRessult(document.querySelector('.task-1 .run-code'), 1, sum);

// Task 2
let derArr1 = arr1.map(element => element *= element);
printRessult(document.querySelector('.task-2 .run-code'), 2, derArr1);

// Task 3
let arr2 = [
    {name: 'Ivan', country: 'Ukraine'},
    {name: 'Petro', country: 'Ukraine'},
    {name: 'Miguel', country: 'Cuba'}
];

let check1 = arr2.every(el => el.country === 'Ukraine');
let a;
check1 ? a = 'Всі ключі містять "Ukraine"' : a = 'Не всі ключі містять "Ukraine"';
printRessult(document.querySelector('.task-3 .run-code'), 3, a);

// Task 4
let check2 = arr2.some(el => el.country === 'Cuba');
let b;
check2 ? b = 'Містять "Cuba"' : b = 'Не містить "Cuba"';
printRessult(document.querySelector('.task-4 .run-code'), 4, b);

// Task 5
let arr3 = [1, 'string', [3, 4], 5, [6, 7]];
let filt = arr3.filter(el => Array.isArray(el) ? el : false);
printRessult(document.querySelector('.task-5 .run-code'), 5, filt);

// Task 6
let arr4 = [1, 2, 5, 0, 4, 5, 6];
let sum1 = arr4.slice(0, arr4.indexOf(0)).reduce((prevel, nextel) => prevel + nextel);
printRessult(document.querySelector('.task-6 .run-code'), 6, sum1);

// Task 7
// let arr7 = [1, 6, 1, 2, 4, 5, 6, 9, 4];
let res = arr4.reduce((s,v,i)=>({suma: s.suma+v, count: s.suma+v >= 10 ? s.count: i+2}), {suma:0, count:0}).count;
printRessult(document.querySelector('.task-7 .run-code'), 7, res);

// Task 8
let arr5 = [1, -2, 3, 0, 4, -5, 6, -11];
let positive = arr5.filter(el => el>0 ? el : false);
let derArr2 = positive.map(el => Math.sqrt(el));
printRessult(document.querySelector('.task-8 .run-code'), 8, derArr2);
