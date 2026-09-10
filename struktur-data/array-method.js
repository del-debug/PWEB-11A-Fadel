//ustdadz punya
const zubair = Array.from("zubair");
console.log("sebelum reverse");
console.log(zubair);

const zubairReverse = zubair.reverse();
console.log("setelah reverse");
console.log(zubairReverse);

// ARRAY METHOD: cara mudah memproses banyak data sekaligus
// Jalankan file ini dengan: node struktur-data/array-method.js

// ARRAY METHOD DASAR
// Array adalah kumpulan data yang disimpan dalam satu variabel.

const buah = ["apel", "mangga", "jeruk"];

console.log("Data awal:", buah);
console.log("Jumlah data:", buah.length);
console.log("Data pertama:", buah[0]);

// 1. push: menambah data di akhir array
buah.push("pisang");
console.log("Setelah push:", buah);

// 2. pop: menghapus data terakhir
buah.pop();
console.log("Setelah pop:", buah);

// 3. unshift: menambah data di awal array
buah.unshift("semangka");
console.log("Setelah unshift:", buah);

// 4. shift: menghapus data pertama
buah.shift();
console.log("Setelah shift:", buah);

// 5. forEach: menjalankan perintah untuk setiap data
console.log("\nDaftar buah:");
buah.forEach((namaBuah) => {
	console.log(namaBuah);
});

// 6. map: membuat array baru dari setiap data
const angka = [1, 2, 3, 4];
const angkaDikaliDua = angka.map((nilai) => nilai * 2);
console.log("\nAngka awal:", angka);
console.log("Angka dikali dua:", angkaDikaliDua);

// 7. filter: mengambil data yang sesuai syarat
const angkaGenap = angka.filter((nilai) => nilai % 2 === 0);
console.log("Angka genap:", angkaGenap);

// 8. includes: mengecek apakah data ada di dalam array
console.log("Apakah ada mangga?", buah.includes("mangga"));

// 9. indexOf: mencari posisi data
console.log("Posisi mangga:", buah.indexOf("mangga"));

// 10. reverse: membalik urutan data
const angkaUrut = [1, 2, 3, 4];
angkaUrut.reverse();
console.log("Setelah reverse:", angkaUrut); // [4, 3, 2, 1]

// Ringkasan mudah:
// push    = tambah di belakang
// pop     = hapus dari belakang
// unshift = tambah di depan
// shift   = hapus dari depan
// forEach = tampilkan/proses setiap data
// map     = ubah semua data
// filter  = pilih beberapa data
// includes = cek apakah data ada
// indexOf = cari posisi data
// reverse = membalik urutan data

// LATIHAN
// Buat array nama teman, lalu:
// 1. Tambahkan satu nama dengan push.
// 2. Hapus nama terakhir dengan pop.
// 3. Tampilkan semua nama dengan forEach.


// 11. sort: mengurutkan data
const nama = ["Zubair", "Ahmad", "Budi"];
nama.sort();
console.log("Nama setelah sort:", nama); // ["Ahmad", "Budi", "Zubair"]

// Untuk angka, gunakan (a, b) => a - b agar urut dari kecil ke besar.
const nilai = [10, 2, 30, 5];
nilai.sort((a, b) => a - b);
console.log("Nilai setelah sort:", nilai); // [2, 5, 10, 30]

const tes = {
    1: (nama) => {
        return "halo " + nama;
    },
};

