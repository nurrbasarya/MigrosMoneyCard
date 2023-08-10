
let mesaj =
    `Migros'a Hoşgeldiniz.
Money Kartınız Var mı?
1-EVET
2-HAYIR
`;

const urunler = [{ "urunIsmi": "Süt", "fiyat": 20},{ "urunIsmi": "Luppo", fiyat: 22 }, { urunIsmi: "Pringles", fiyat: 54 }, { urunIsmi: "Domestos Çamaşır Suyu", fiyat: 65 }]


let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc) {

    let isim = prompt("Adınızı Giriniz:");
    let soyisim = prompt("Soyadınızı Giriniz:");

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri Bilgileri: ${musteri.isim} ${musteri.soyisim}
        Ödenecek Tutar: ${odenecekTutar}`
    );

} else {
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar: ${odenecekTutar}`);
}