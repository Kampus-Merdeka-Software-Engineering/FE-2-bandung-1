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
