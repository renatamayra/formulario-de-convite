const toggle = document.querySelector('.switch');
const body = document.body;
const text = document.querySelector('#switch-toggle p');

toggle.addEventListener('click', () => {
  body.classList.toggle('light');
  text.textContent = body.classList.contains('light') ? 'Claro' : 'Escuro';
});
