let productData = [];
let datarekom = [
  {
    id: 'wisata26',
    itemSrc: './img/kota-magelang/CandiBorobudur.png',
    name: 'Candi Borobudur',
    idkota: 'Magelang',
    price: 50000,
  },
  {
    id: 'wisata27',
    itemSrc: './img/kota-pekalongan/MasjidAl-Fairus.png',
    name: 'MasjidAl-Fairus',
    idkota: 'Pekalongan',
    price: 10000,
  },
  {
    id: 'wisata28',
    itemSrc: './img/kota-salatiga/RawaPening.png',
    name: 'Rawa Pening',
    idkota: 'Salatiga',
    price: 25000,
  },
  {
    id: 'wisata29',
    itemSrc: './img/kota-semarang/DusunSemilirEcoPark.png',
    name: 'Dusun Semilir Eco Park',
    idkota: 'Semarang',
    price: 21000,
  },
  {
    id: 'wisata30',
    itemSrc: './img/kota-surakarta/TheHeritagePalace.png',
    name: 'The Heritage Palace',
    idkota: 'Surakarta',
    price: 30000,
  },
];

const listwisata = document.getElementById('listwisata');
const listrekomen = document.getElementById('listrekomendasi');
function itemwista(id, jdl, price) {
  return `
    <div style="width: 99%">
        <h1>${jdl}</h1>
    </div>
    <h2>Rp.${price}</h2>
    <button>
        <a href="pay.html?id=${id}">GO FLIGHT</a>
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
    let data = getkota(listkota[i].id);
    productData = data;
    cetakitemisata();
    
    for (let j = 0; j < listkota.length; j++) {
      listkota[j].classList.remove("aktif");
    }
    listkota[i].classList.add("aktif")
  });
}

getapi(function (error, data) {
  if (error) {
    console.error('Terjadi kesalahan:', error);
  } else {
    // ketika pertama kali dirun
    productData = getdata('all');
    cetakitemisata();
    cetakRekomen();
  }
});
