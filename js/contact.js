const API_URL = 'https://clever-gray-salamander.cyclic.app';

const formContact = document.getElementById('form-contact');

formContact.addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(formContact);
  var body = Object.fromEntries(formData);

  try {
    const response = await fetch(`${API_URL}/ContactUs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const products = await response.json();
    alert(products.message);
  } catch (error) {
    console.error('error :', error);
  }
});
