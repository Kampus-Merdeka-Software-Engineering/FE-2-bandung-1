window.addEventListener('scroll', function () {
    // Menentukan posisi laman yang di-scroll
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Menambah atau menghapus kelas 'scrolled' berdasarkan posisi scroll
    if (scrollPosition > 0) {
      header.classList.add('scrolled1');
      if (scrollPosition > 730) {
        header.classList.add('scrolled2');
      } else {
        header.classList.remove('scrolled2');
      }
    } else {
      header.classList.remove('scrolled1');
    }
  });
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
    const targetElement = document.getElementById('destination');
    const offset = 128; // Jarak dari atas yang diinginkan
    const targetPosition = targetElement.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth', // Opsi ini membuat pengguliran menjadi halus
    });
  });