let user = {
    username: '',
    password: ''
};
let registeredUser = {
    username: 'andre',
    password: '1234'
};
let storagedUser = localStorage.setItem('user', JSON.stringify(registeredUser));

let username;
let password;

let txtWelcome = document.getElementById('txtWelcome');

function login() {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    user.username = username;
    user.password = password;
    console.log(user);
    checkLogin();
}

function checkLogin() {
    /* if(user.username == registeredUser.username && user.password == registeredUser.password) {
        console.log('Logado');
    } else {
        console.log('Credenciais incorretas');
    } */
    const userSavedLocal = JSON.parse(localStorage.getItem('user'));

    if (user.username == userSavedLocal.username && user.password == userSavedLocal.password) {
        location.href = './homepage.html';
    } else {
        location.reload();
        alert('Credenciais não existem no sistema, verifique seus dados e tente novamente.');
    }

}

function logout() {
    localStorage.clear();
    location.href = './index.html';
}