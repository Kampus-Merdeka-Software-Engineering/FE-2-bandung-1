let productData = [];
let datarekom = [
  {
    id: 'wisata26',
    itemSrc: './img/kota-salatiga/BentengPendem.png',
    name: 'Benteng Pendem',
    idkota: 'Salatiga',
    price: 350000,
  },
  {
    id: 'wisata27',
    itemSrc: './img/kota-salatiga/MataAirSenjoyo.png',
    name: 'Mata Air Senjoyo',
    idkota: 'Salatiga',
    price: 350000,
  },
  {
    id: 'wisata28',
    itemSrc: './img/kota-salatiga/RawaPening.png',
    name: 'Rawa Pening',
    idkota: 'Salatiga',
    price: 350000,
  },
  {
    id: 'wisata29',
    itemSrc: './img/kota-salatiga/SalokaThemePark.png',
    name: 'Saloka Theme Park',
    idkota: 'Salatiga',
    price: 350000,
  },
];

const listwisata = document.getElementById('listwisata');
const listrekomen = document.getElementById('listrekomendasi');
function itemwista(id, jdl, price) {
  return `
    <div style="width: 80%">
        <h1>${jdl}</h1>
    </div>
    <h2>Rp.${price}</h2>
    <button>
        <a href="pay.html?id=${id}">Go Flight</a>
    </button>`;
}
function cetakitemisata() {
  listwisata.innerHTML = '';
  productData.forEach((e) => {
    const wisatacard = document.createElement('div');
    wisatacard.classList.add('isi_wisata');
    wisatacard.style.backgroundImage = `url('${e.itemSrc}')`;
    let item = itemwista(e.id, e.name, e.price);
    wisatacard.innerHTML = item;
    listwisata.appendChild(wisatacard);
  });
}

function cetakRekomen() {
  listrekomen.innerHTML = '';
  datarekom.forEach((e) => {
    const wisatacard = document.createElement('div');
    wisatacard.classList.add('isi_wisata');
    wisatacard.style.backgroundImage = `url('${e.itemSrc}')`;
    let item = itemwista(e.id, e.name, e.price);
    wisatacard.innerHTML = item;
    listrekomen.appendChild(wisatacard);
  });
}

const kota = document.getElementById('rekomkota');
const listkota = kota.children;
for (let i = 0; i < listkota.length; i++) {
  listkota[i].addEventListener('click', function () {
    let data = getdata(listkota[i].id);
    productData = data;
    cetakitemisata();
  });
}

// ketika pertama kali dirun
productData = getdata('all');
cetakitemisata();
cetakRekomen();
