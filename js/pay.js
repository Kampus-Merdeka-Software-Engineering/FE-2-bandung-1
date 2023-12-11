const pop = {
  pop: document.getElementById('settingssett'),
  popup() {
    this.pop.style.display = 'block';
  },
  popClear() {
    this.pop.style.display = 'none';
    location.reload(true);
  },
};

// get data

// ketika pertama kali dirun
var currentURL = window.location.href;
var url = new URL(currentURL);
var id = url.searchParams.get('id');


getapi(function (error, data) {
  if (error) {
    console.error('Terjadi kesalahan:', error);
  } else {
    var data = getdata(parseInt(id));
    data = data[0];
    const destination = document.getElementById('ipt-destination');
    destination.value = data.name;
    const price = document.getElementById('ipt-price');
    price.value = data.price;
  }
});

// set api

const API_URL = 'https://clever-gray-salamander.cyclic.app';

const formPay = document.getElementById('form-pay');
formPay.addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(formPay);
  var body = Object.fromEntries(formData);

  body.Price = parseInt(body.Price);
  body.quantity = parseInt(body.quantity);

  console.log(body)

  try {
    const response = await fetch(`${API_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    pop.popup();

    const products = await response.json();
  } catch (error) {
    console.error('error :', error);
  }
});
