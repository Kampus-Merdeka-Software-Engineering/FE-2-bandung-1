let nav = document.getElementById('navbar');
nav.children[1].addEventListener('click', function (event) {
  event.preventDefault(); // Mencegah perilaku default tautan
  const targetElement = document.getElementById('tour');
  const offset = 128; // Jarak dari atas yang diinginkan
  const targetPosition = targetElement.offsetTop - offset;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth', // Opsi ini membuat pengguliran menjadi halus
  });
});
nav.children[2].addEventListener('click', function (event) {
  event.preventDefault(); // Mencegah perilaku default tautan
  const targetElement = document.getElementById('testi');
  const offset = 128; // Jarak dari atas yang diinginkan
  const targetPosition = targetElement.offsetTop - offset;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth', // Opsi ini membuat pengguliran menjadi halus
  });
});
