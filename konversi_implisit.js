// Koneversi implisit > konversi otomatis tanpa instruksi eksplisit dari programmer, biasanya terjadi ketika kita melakukan operasi pada tipe data yang berbeda.

const age = 40;
const massage = "umur saya adalah " + age + " tahun";
const jumlah = "40" + 40 ; //hasilnya akan menjadi string karena salah satu operand adalah string, sehingga javascript akan mengkonversi angka 40 menjadi string dan menggabungkannya dengan string "40" sehingga hasilnya adalah "4040"

console.info("konversi implisit")
console.log(massage);
console.log(age);
console.log(jumlah);
console.log(Number(jumlah) + age); //hasilnya akan menjadi 80 karena kita mengkonversi string "4040" menjadi angka 4040 dan menambahkan dengan angka 40 sehingga hasilnya adalah 4040 + 40 = 4080



const boolean = true;
const nomor = 10;
const result = boolean + nomor; //hasilnya akan menjadi 11 karena javascript akan mengkonversi boolean true menjadi angka 1 dan menambahkan dengan angka 10 sehingga hasilnya adalah 1 + 10 = 11

console.info("konversi implisit boolean dan number")
console.log(result);
console.info("konversi implisit string dan boolean")


console.info("konversi implisit Boolean dan String")
const pertanyaan = jumlah + boolean; //hasilnya akan menjadi string "4040true" karena salah satu operand adalah string, sehingga javascript akan mengkonversi boolean true menjadi string "true" dan menggabungkannya dengan string "4040" sehingga hasilnya adalah "4040true"
console.log(pertanyaan);