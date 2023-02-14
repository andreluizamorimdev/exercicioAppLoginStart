userEdited = {
    username: 'teste',
    password: '12345',
    url: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    email: 'teste@teste.com'
}

localStorage.removeItem('user');
localStorage.setItem('user', JSON.stringify(userEdited));
console.log(localStorage.getItem('user'));

function logout() {
    localStorage.removeItem('user');
    location.href = './index.html';
}