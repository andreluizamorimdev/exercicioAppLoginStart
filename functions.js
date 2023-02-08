var user = {
    username: '',
    password: ''
};
var usuarioCadastrado = {
    username: 'testando',
    password: '1234'
};

let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('login');

const handleChangeUsername = (event) => {user.username = event.target.value};
const handleChangePassword = (event) => {user.password = event.target.value};

login.addEventListener('click',clicou);
username.addEventListener('change', handleChangeUsername);
password.addEventListener('change', handleChangePassword);

function clicou () {
    if(user.username == usuarioCadastrado.username && user.password == usuarioCadastrado.password) {
        console.log('Logado');
    } else {
        console.log('credenciais incorretas');
    }
}