const scriptURL = 'https://script.google.com/macros/s/AKfycbwPQYINk-ZGHJK1F2X1BtRknkKzov3JDuVDehzPi71a_G2i1KURI4uPJeUhGy-DSnbT/exec';
const form = document.forms['Revou-contact'];
const BtnKirim = document.querySelector('.btn-kirim');
const BtnLoading = document.querySelector('.btn-loading');
const Alert = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //ketika tombol submit di klik
  // tampilkan tombol loading, dan menghilangkan tombol kirim
  BtnLoading.classList.toggle('d-none'); //cari loading cek, toggle(switch ada jadi tidak ada dan sebaliknya)
  BtnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(() => {
      // tampilkan tombol kirim, dan menghilangkan tombol loading
      BtnLoading.classList.toggle('d-none');
      BtnKirim.classList.toggle('d-none');
      //tampilkan alert
      Alert.classList.toggle('d-none');
      //reset formnya
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
