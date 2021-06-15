

/* 5. Inheritance */
class orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    tidur(){
        console.log(`${this.nama} sedang tidur`);
        console.log(`${this.nama} sedang makan`);
    }
}

class pelajar extends orang{
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah = namaSekolah;  
    }
    belajar(){
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}
const user1 = new orang ("John", 17)
console.log(user1.nama);
console.log(user1.umur);
user1.tidur();

const user = new pelajar ("John", 17, "Unklab");
console.log(user.nama);
console.log(user.umur);
console.log(user.namaSekolah);
user.belajar();