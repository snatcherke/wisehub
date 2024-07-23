const container = document.getElementById('container');
const registration = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=>
{
    container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>
{
    container.classList.remove("active");
});
