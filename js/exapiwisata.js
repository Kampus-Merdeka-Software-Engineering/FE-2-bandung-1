let alldatawisata = [];

function getapi(callback) {
  const API_URL = 'https://clever-gray-salamander.cyclic.app';
  try {
    fetch(`${API_URL}/Destination`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((products) => {
        alldatawisata = products.data;
        callback(null, alldatawisata); // Panggil callback dengan data wisata sebagai argumen
      })
      .catch((error) => {
        console.error('error:', error);
        callback(error, null); // Panggil callback dengan kesalahan sebagai argumen
      });
  } catch (error) {
    console.error('error:', error);
    callback(error, null); // Panggil callback dengan kesalahan sebagai argumen
  }
}

function getdata(id) {
  switch (id) {
    case 'all':
      return alldatawisata;
      break;

    default:
      return alldatawisata.filter((wisata) => wisata.id === id);
      break;
  }
}

function getkota(id){
  switch (id) {
    case 'all':
      return alldatawisata;
      break;

    default:
      return alldatawisata.filter((wisata) => wisata.idkota === id);
      break;
  }
}
