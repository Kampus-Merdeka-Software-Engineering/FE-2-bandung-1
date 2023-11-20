let productData = [];

const listwisata = document.getElementById('listwisata');
function itemwista(id, jdl, price) {
  return `
    <div style="width: 80%">
        <h1 style="color: white; margin: 0px 0px 0px 0px; text-align: center;">${jdl}</h1>
    </div>
    <button style="width: 206px; height: 46px; padding: 8px 16px; border-radius: 25px; font-size: 16px; font-style: normal; font-weight: 800; border: none">
        <a href="pay.html?id=${id}" style="text-decoration: none; color: #9eb24a">Go Flight</a>
    </button>
    <h2 style="font-size: 24px; color: white; margin: 0px 0px 0px 0px;">Rp.${price}</h2>`;
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

const kota = document.getElementById('rekomkota');
const listkota = kota.children;
for (let i = 0; i < listkota.length; i++) {
  listkota[i].addEventListener('click', function () {
    let data = getdata(listkota[i].id);
    productData = data;
    console.log('reload tampilan data kota denfan id' + listkota[i].id);
    cetakitemisata();
  });
  console.log('user memasukkan data lagi ke variabel productData');
}

// ketika pertama kali dirun
productData = getdata('all');
cetakitemisata();
