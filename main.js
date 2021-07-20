'use strict'

const getSelect = selector => document.querySelector(selector);
let custStyle = document.forms.styles;

// Зміна HTML-сируктури
getSelect('.edit-inner').addEventListener('click', () => {
    getSelect('.edit-block').classList.remove('hide');
    getSelect('.style-block').classList.add('hide');
    getSelect('.edit-area').value = getSelect('.output-block').innerHTML;
});

getSelect('.btn-save').addEventListener('click', () => {
    getSelect('.edit-block').classList.add('hide');
    getSelect('.output-block').innerHTML = getSelect('.edit-area').value;
});


// Зміна стилів
getSelect('.edit-style').addEventListener('click', () => {
    getSelect('.style-block').classList.remove('hide');
    getSelect('.edit-block').classList.add('hide');
});

// розмір тексту
for(let i=0; i<custStyle.size.length; i++){
    custStyle.size[i].addEventListener('click', (event) =>{
        getSelect('.output-block').style.fontSize = event.target.value;
    });
}

// шрифт
custStyle.fontFamily.addEventListener('change', (event) =>{
    getSelect('.output-block').style.fontFamily = event.target.value;
});

// Кольори тексту та фону
let txtColor = getSelect('.tx-color');
let bgColor = getSelect('.bg-color');
let colors = ['red', 'green', 'darkcyan', 'yellow', 'orange', 'crimson', 'black', 'silver', 'white'];

custStyle.textColor.addEventListener('click', () =>{
    txtColor.classList.remove('hide');
    bgColor.classList.add('hide');
    
    for (let i = 0; i < txtColor.children.length; i++) {
        txtColor.children[i].style.backgroundColor = colors[i];
        txtColor.children[i].addEventListener('click', (e) => {
            getSelect('.output-block').style.color = e.target.style.backgroundColor;
        });
    }
});
custStyle.backroundColor.addEventListener('click', () =>{
    getSelect('.bg-color').classList.remove('hide');
    txtColor.classList.add('hide');
    for (let i = 0; i < bgColor.children.length; i++) {
        bgColor.children[i].style.backgroundColor = colors[i];
        bgColor.children[i].addEventListener('click', (e) => {
            getSelect('.output-block').style.backgroundColor = e.target.style.backgroundColor;
        });
    }
});



/* Стилі тексту */
// Жирний
custStyle.fontWeight.addEventListener('click', (e) => {
    (e.target.checked) ? getSelect('.output-block').style.fontWeight = 'bold' : getSelect('.output-block').style.fontWeight = 'normal';
});
// Курсив
custStyle.italicStyle.addEventListener('click', (e) => {
    (e.target.checked) ? getSelect('.output-block').style.fontStyle = 'italic' : getSelect('.output-block').style.fontStyle = 'normal';
});


/* Додавання списку і таблиці */
getSelect('.btn-add').addEventListener('click', () => {
    getSelect('.edit').classList.add('hide');
    getSelect('.add_element').classList.remove('hide');
});

let elemType = document.forms.addElements;
elemType.addEventListener('change', () => {
    for(let i=0; i<elemType.choose.length; i++){
        if (elemType.choose[i].checked == true){
            if (elemType.choose[i].id === 'elTable'){
                getSelect('.create-table').classList.remove('hide');
                getSelect('.create-list').classList.add('hide');
            }
            else{
                getSelect('.create-list').classList.remove('hide');
                getSelect('.create-table').classList.add('hide');
            }
        }

    }
});

// Додавання таблиці
const table = document.forms.addTable;
console.log(table);
console.log(table.countTr);

table.create.addEventListener('click', () =>{
    console.log(table);
    console.log(table.countTr);
    let cTr = table.countTr.value;
    let cTd = table.countTd.value;
    let wTd = table.widthTd.value;
    let hTd = table.heightTd.value;
    let bordW = table.bordWidth.value;
    let bordS = table.borderStyle.value;
    let bordC = table.borderColor.value;

    getSelect('.edit-area').value += `
                <table style="border: ${bordW}px ${bordS} ${bordC};">`;
    for(let i=0; i<cTr; i++){
        getSelect('.edit-area').value += `
                    <tr>`;
        for(let j=0; j<cTd; j++){
        getSelect('.edit-area').value += `
                        <td style="border: ${bordW}px ${bordS} ${bordC}; width: ${wTd}px; height: ${hTd}px;">Колонка</td>`;
        }
        getSelect('.edit-area').value += `
                    </tr>`;
    }
    getSelect('.edit-area').value += `
                </table>`;

    getSelect('.add_element').classList.add('hide');
    getSelect('.edit').classList.remove('hide');
});


// Додавання списку
const list = document.forms.addList;

list.create.addEventListener('click', () =>{
    const countLi = list.count.value;
    const typeLi = list.type.value;
    console.log(countLi, typeLi);
    getSelect('.edit-area').value += `
                <ul style="list-style-type: ${typeLi}"> 
                    <h3>Назва списку</h3>`;
    for(let i=0; i<countLi; i++){
        getSelect('.edit-area').value += `
                    <li>елемент ${i+1}</li>`;
    }
    getSelect('.edit-area').value += `
                </ul>`;

    getSelect('.add_element').classList.add('hide');
    getSelect('.edit').classList.remove('hide');
});