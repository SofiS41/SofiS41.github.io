'use strict'

let regLogin = /^[A-Za-z]{4,16}$/;
let regPass = /^\w{4,16}$/;
let regMail = /^\S{1,}@[a-z]{2,}\.[a-z]{2,}$/;

var index=0, editUserInfo=[], tabRow;
let user=[];
let addForm = document.forms.addUser;
let tab = document.querySelector('.users-table');
let tBody = document.querySelector('tbody');

function saveEditUser(){
    let login = addForm.userLogin.value,
    password = addForm.userPassword.value,
    email = addForm.userEmail.value;
    let arrayInfo = [login, password, email];
    for(let i=0; i<3; i++){
        tabRow.children[i+1].textContent = arrayInfo[i];
    }
    addForm.reset();
    addForm.editUser.classList.add('hide');
    addForm.signButton.classList.remove('hide');
    addForm.signButton.disabled = true;
}
function editUser(e){
    addForm.editUser.disabled = true;
    addForm.editUser.classList.remove('hide');
    addForm.signButton.classList.add('hide');
    e.target.closest('tr').children.length;
    for (let i=0; i < 3; i++) {
        addForm[i].value =  e.target.closest('tr').children[i+1].textContent;
    }
    tabRow = e.target.closest('tr');
}

function deleteUser(e){
    let rowI = e.target.closest('tr').rowIndex;
    let tabLen = tBody.children.length;
    if(rowI < tabLen){
        while(rowI+1 <= tabLen){
            let tabTr = tBody.children[rowI]
            tabTr.id = `user_${rowI}`;
            tabTr.children[0].textContent = rowI;
            rowI++;
        }
    }
    index = tabLen-1;
    e.target.closest('tr').remove();
}

function render(indexl, user){
    tab.children[1].innerHTML += `
        <tr id="user_${indexl}" class="row">
            <td class="index">${indexl}</td>
            <td>${user[0]}</td>
            <td>${user[1]}</td>
            <td>${user[2]}</td>
            <td><span class="table-btn btn-edit" data-btnName="edit">Змінити</span></td>
            <td><span class="table-btn btn-delete" data-btnName="delete">Видалити</span></td>
        </tr>
    `;
}

function addUser(){
    let i=0, login, password, email;
    let User;
    login = addForm.userLogin.value;
    password = addForm.userPassword.value;
    email = addForm.userEmail.value;
    if(login && password && email){
        User = {
            login: login,
            password: password,
            email: email
        };
    }
    for (const key in User) {
        user[i] = User[key];
        i++;
    }
    addForm.reset();
    index++;
    render(index, user);
    addForm.signButton.disabled = true; 
}


addForm.addEventListener('input', (e)=>{
    let login = addForm.userLogin.value,
    password = addForm.userPassword.value,
    email = addForm.userEmail.value;

    // button sign
    if(regLogin.test(login) && regPass.test(password) && regMail.test(email)){
        addForm.signButton.disabled = false;
        addForm.signButton.addEventListener('click', addUser);
    }
    else addForm.signButton.disabled = true;
    
    // button edit
    if(regLogin.test(login) && regPass.test(password) && regMail.test(email)){
        addForm.editUser.disabled = false;
        addForm.editUser.addEventListener('click', saveEditUser);
    }
    else addForm.editUser.disabled = true;
})
document.querySelector('.users-table').addEventListener('click', (e)=>{
    if (e.target.dataset.btnname == 'delete') deleteUser(e);
    else if (e.target.dataset.btnname == 'edit') editUser(e);
});
