//array adalah struktur data yang dapat menyimpan kumpulan data yang memiliki tipe data yang sama atau berbeda
//array dapat menyimpan nilai dengan type data number, string, boolean, object, array dan lain-lain

const array = [1,2];
typeof array; // output: object
const objects = {benda: "benda"};
typeof objects; // output: object
const isObjectDenganArrey = array === objects; // output: false
console.log(isObjectDenganArrey);
const satu = [1];
const satuObject = [1];
console.log(satu === satuObject); // output: false

//cara mendeklarasikan array dengan 3 cara di javascript

//1.menggunakan object construction Array
const arrayConstruction = new Array(1,2,3,4,5);
const arrayKosong = new Array();
console.log(arrayConstruction);// output: [1,2,3,4,5]
console.log(arrayKosong);// output: []

//array.from adalah method untuk membuat array yang merupakan
//menggunakan Array.form()
const splitBuah = Array.from["pisang"];
console.log(splitBuah);

const splitNama = Array.from["fadel"];
console.log(splitNama);

const arrayLama = new Array('satu', 'dua', 'tiga','empat');
const arrayBaru = Array.from(arrayLama);
const isArrayLamaIdentikArrayBaru = arrayLama === arrayBaru;
console.log(isArrayLamaIdentikArrayBaru ? "ya sama bro" : "sorry beda bro");
console.log(arrayLama);
console.log(arrayBaru);

//3.menggunakan array literal[]
const arrayLiteral = 
    ['ayam','bebek',//string
    10,//number
    true,//boolean
    {ayam: "hidup", cicak: "mati"},
    ["cicak","bebek"],
    ];// perelemen bisa berbeda tipe datana
    //untuk mengaksesnya kita bisa gunakan [] dengan nomor indexnya
    //index dimulai dari nol

    const objectArrayLiteral = arrayLiteral[4];
    const {ayam, cicak} = objectArrayLiteral;
    console.log(objectArrayLiteral);
    console.log(ayam);
    console.log(cicak);
    console.log(ayam === "hidup" ? "ayam hidup" : "ayam mati");

    const arrayArrayLiteral = arrayLiteral[5]; //mengakses array yang ada didalam arrayLiteral
    console.log(arrayArrayLiteral[0]);// output: cicak
    console.log(arrayArrayLiteral[1]);// output: bebek

    const booleanArrayLiteral = arrayLiteral[3];
    console.log(booleanArrayLiteral);

    const stringArrayLiteral = arrayLiteral[0];
    console.log(stringArrayLiteral);

    //mengubah ayam menjadi mati

    //apakah bisa ncicic