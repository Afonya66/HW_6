const button = document.querySelector('#btn');
const inp = document.querySelector('#input');
const greet = document.querySelector('#head');

button.addEventListener('click', () => {
    const user_name = inp.value
    window.localStorage.setItem('name', `${user_name}`)
    inp.value = " "
});
let title_user_name = window.localStorage.getItem('name')
console.log(title_user_name);
if (title_user_name !== '') {
    greet.textContent = `Здравствуйте, ${title_user_name}!`
}
