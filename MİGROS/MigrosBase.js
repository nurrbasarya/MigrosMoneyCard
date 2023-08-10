class MigrosBase {
    indirimOrani = 20;

    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla() {
        let odenecekTutar = 0;
        if (this.urunleriKontrolEt(this.urunler)) {
            //Sepet dolu
            
            if (this.kartVarmi) {
                
                //kartı varsa
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100);
                })
            } else { //kartı yoksa
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;
                })
                
            }


        } else {
            alert("Sepetiniz Boş.Ürün Ekleyiniz.")
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urunler) {
        if (urunler == null || urunler.lenght == 0) {
            return false;
        }
        return true;
    }

   
}