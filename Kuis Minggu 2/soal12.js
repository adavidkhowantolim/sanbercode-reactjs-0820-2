class BangunDatar {
  set name(nama){
    this._nama = nama;
  }
  get name(){
    return this._nama;
  }
  luas(jenis,s){
    if (!jenis.localeCompare("Lingkaran")) {
      var area = Math.PI*s*s;
      console.log(`Luas Parent ${this._nama}: ${area}`);
      return area;
    }
    if (!jenis.localeCompare("Persegi")) {
      var area = s*s;
      console.log(`Luas Parent ${this._nama}: ${area}`);
      return area;
    }
    return "";
  }
  keliling(jenis, s){
    if (!jenis.localeCompare("Lingkaran")) {
      let circumference = Math.PI*s*2;
      console.log(`Keliling Parent ${this._nama}: ${circumference}`);
      return circumference;
    }
    if (!jenis.localeCompare("Persegi")) {
      let circumference = s*4;
      console.log(`Keliling Parent ${this._nama}: ${circumference}`);
      return circumference;
    }
    return "";
  }
}

class Lingkaran extends BangunDatar {
  set name(x){
    super.name = x;
  }
  luas(r){
    var ret = super.luas("Lingkaran", r);
    console.log(`Luas Child ${super.name}: ${ret}`);
    return ret;
  }
  keliling(r){
    var ret = super.keliling("Lingkaran", r);
    console.log(`Keliling Child ${super.name}: ${ret}`);
    return ret;
  }
}

class Persegi extends BangunDatar {
  set name(x){
    super.name = x;
  }
  luas(r){
    var ret = super.luas("Persegi", r);
    console.log(`Luas Child ${super.name}: ${ret}`);
    return ret;
  }
  keliling(r){
    var ret = super.keliling("Persegi", r);
    console.log(`Keliling Child ${super.name}: ${ret}`);
    return ret;
  }
}

let x = new Lingkaran();
x.name = "lingkaran 1"; 
x.luas(5);
x.keliling(5);

let y = new Persegi();
y.name = "persegi 2"; 
y.luas(5);
y.keliling(5);
