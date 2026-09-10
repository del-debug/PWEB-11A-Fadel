//array detracturing => untuk melihat isi dari array

const arrayDestruc = new Array('satu','dua','tiga', false, true,10,
    {nama: "maul", 
        kelas: "11",
        gender: "pria",
         isActive: true},
        ["botol","spidol","papan tulis"],
    );

// Array destructuring adalah cara mengambil nilai dari array
// lalu menyimpannya ke beberapa variabel secara singkat.

// Contoh 1: mengambil nilai berdasarkan urutan indeks
const [kataPertama, kataKedua, kataKetiga] = arrayDestruc;

console.log(kataPertama); // satu
console.log(kataKedua);   // dua
console.log(kataKetiga);  // tiga

// Contoh 2: melewati nilai tertentu dengan koma kosong
const [, , , nilaiFalse, nilaiTrue, angka] = arrayDestruc;

console.log(nilaiFalse); // false
console.log(nilaiTrue);  // true
console.log(angka);      // 10

// Contoh 3: mengambil objek dan array yang ada di dalam array
const [,,,,,, dataSiswa, alatTulis] = arrayDestruc;

console.log(dataSiswa.nama); // maul
console.log(alatTulis[0]);   // botol

// Contoh 4: rest operator (...) mengambil sisa nilai array
const [pertama, kedua, ...sisaData] = arrayDestruc;

console.log(pertama);  // satu
console.log(kedua);    // dua
console.log(sisaData); // sisa nilai mulai dari 'tiga'


//destruction array hanya dapat dilakukan jika array tersebut 
//tidak bernilai null atau undefined
//ketika melakukan destruction pada array yang bernilai null atau undefined
//akan menyebabkan error

const arrayNull = [1,2];
const [error, error1, error3,] = arrayNull;
console.log(error3);

