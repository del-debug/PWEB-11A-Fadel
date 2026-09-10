//object adalah kumpulan pasangan key value dan bukan merupakan tipe data
//yang bukan primtif, object dapat menyimpan berbagai type data, termasuk 
//type data primitif dan tipe data non-primitif
//tipe data primitif adalah tipe data yang memiliki nilai tunggal 
//dan tidak dapat diubah setelah dibuat 
//contoh tipe data primitif adalah string, number boolean, null undefined dan symbol.

//contoh object literal => {}
const objectLiteral = {}; //di dalam tanda kurung di sebut dengan property, property terdiri dari key dan value
const product = {
    name: "laptop", // name adalah key dan "laptop" adalah value
    price: 450000, // price adalah key dan 450000 adalah value
    category: "elektronik", // category adalah key dan "elektronik" adalah value
    "stok": 10, // stok adalah key dan 10 adalah value  
    "isAvailable": true // isAvailable adalah key dan true adalah value
};

//cara mengakses value property pada object
// - Menggunakan dot notation
console.info(product.name); // output: laptop
console.info(product.isAvailable); // output: true

//kekurangan dari dot dotation adalah nama key yang ingin diakses harus valid
//tidak boleh mengandung spasi;
//tidak boleh diawali angka;
//dan tidak boleh mengandung spesial karakter.



// - menggunakan Square Brancket
console.info("mengakses property pada object menggunakan Square Bracket");
const isProductAvailable = product["isAvailable"]; // output: true
const isProduct = product[ 'name'];
console.log(isProductAvailable);
console.log(isProduct);



// - menggunakan object destruction
const kelas = {
    "totalMeja" : 21,
    totalSiswa: 20,
    isClean: false
};

//detrunction dalam javascript merupakan sintaksis yang dapat mengeluarkan nilai dari properti object 
//kedalam satuan yang lebih kecil(available)
const {isClean, totalSiswa} = kelas;
console.info("mengakses properti pada oject menggunakan object destruction");
console.log(isClean)
console.log(totalSiswa)

//destruction object yang key-nya tidak ada akan mengembalikan nilai undefined.
//oleh karena itu, kita bisa memanfaatkan default value ketika destruntion object
//seperti berikut ini agar nilainya tidak undefined
const {isTvMerdeka} = kelas;
console.log(isTvMerdeka);

const { totalSiswaLaptop  = 18} = kelas;// kita kasi default value pada key yang tidak ada di dalam  property 
console.log(totalSiswaLaptop);

//contoh lain 
const user = {
    id: 24,
    emaiil:'arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret'
};

//sangar memudahkan untuk mengambil beberapa properti dari obeject sekaligus.
//tanpa harus 
const {username,password} = user;


//mengubah value property pada object 
const accounts = {
    username: 'dicoding',
    password: 'secret',
    isActive: true,
    isBanned: false
};

accounts.isBanned = true; //mengubah value property isBanned menjadi true
console.info("mengubah value property pada object");
console.log(accounts.isBanned); // true


//square bracket notation juga bisa digunakan untuk mengubah value property pada object
//fungsi square bracket notation ini sangat berguna ketika kita ingin mengubah value property pada object yang key-nya disimpan dalam sebuah variable
const keyToUpdate = "isBanned";
accounts[keyToUpdate] = true;


// menghapus property pada object
delete accounts.isBanned;// menghapus property isBanned
console.log(accounts);


//menambahkan property baru pada object
accounts.category = "Education";//dot notation
console.log(accounts);
console.log(accounts.category);
console.log(accounts);//menampilkan object setelah ditambahkan property

accounts[`role`] = "admin";//square bracket
console.log(accounts.role);//admin
console.log(accounts);//menampilkan object accounts setelah ditambahkan property role
delete accounts['role']; //menghapus property role

const {masaBerlaku = 10} = accounts; //menambahkan property baru pada object menggunakan object destruction
console.log(masaBerlaku); //10
console.log(accounts); //menampilkan object setelah ditambahkan property


//maksud dari property pada object adalah untuk menyimpan data yang berhubungan dengan object tersebut.
