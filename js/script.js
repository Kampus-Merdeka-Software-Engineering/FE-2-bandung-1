const head = document.getElementById('header');
const burger = document.getElementById('burger');

burger.addEventListener('click', function () {
  head.classList.toggle('header-active');
});

