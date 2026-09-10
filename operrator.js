//3 jenis operator

//1.Unary operator
//operator yang hanya membutuhkan satu operand, contoh: typeof, delete, void, +, -, ++, --, !, ~
typeof "dicoding";




//2.Binary operator
//operator yang membutuhkan dua operand, contoh: +, -, *, /, %, <, >, <=, >=, ==, ===, !=, !==, &&, ||, &, |, ^, <<, >>, >>>, in
4 + 5;
10 / 2;
5 * 4;

//3.Ternary operator
//operator yang membutuhkan tiga operand, contoh: ? :
let inputage = 15;
let maxAge = 18;

if (inputage < maxAge) {
    console.log("anda belum dewasa");
} else {
    console.log("anda sudah dewasa");
}

//menggunakan ternary operator
let result = (inputage < maxAge) ? "anda belum dewasa" : "anda sudah dewasa";
console.log(result);

//assignment operator : menginisiasi nilai dan memperbarui nilai
let z = 5;
z += 3; // sama dengan x = x + 3

//operator aritmatika tambahan;
//increment operator (++)
var x = 50;
console.info("operator arotmatika: increment")
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++)

//decrement operator (--)
var y = 100;
console.info("operator arotmatika: decrement")
console.log(y--);
console.log(y--);


console.log(--y);
console.log(--y);

//eksponensial operator (**)
var c = 4;
console.info("operator aritmatika: eksponensial ")
console.log(c ** 2);
console.log(c ** c);

//comparison operator / operasi perbandingan menggunakan (==) untuk membandingkan nilai, dan mengembalikan nilai boolean true atau false 
console.info("operator perbandingan")
//sama (==) ==> untuk menggunakan ke dua operator apakah nilainya sama tanpa membandingkan type data

let a = 10;
let b = "10";
let isAEqualB = (a == b); //hasilnya akan menjadi true karena kedua nilai sama yaitu 10, meskipun tipe datanya berbeda yaitu number dan string

console.log(isAEqualB);

//identik (===) ==> untuk menggunakan ke dua operator apakah nilainya sama dan tipe datanya sama
console.info("operator identik (===) untuk membandingkan nilai dan tipe data")
let d = 10;
let e = "10";
let isDEqualE = d === e; //hasilnya akan menjadi false karena kedua nilai sama yaitu 10, tetapi tipe datanya berbeda yaitu number dan string
console.log(isDEqualE); 


//konversi eksplisit adalah cara yang paling tepat untuk mengubah tipe data, karena kita bisa menentukan tipe data yang diinginkan, sedangkan konversi implisit adalah konversi otomatis tanpa instruksi eksplisit dari programmer, biasanya terjadi ketika kita melakukan operasi pada tipe data yang berbeda.

//tidak sama (!=) ==> untuk menggunakan ke dua operator apakah nilainya tidak sama tanpa membandingkan type data
console.info("operator tidak sama (!=) untuk membandingkan nilai tanpa membandingkan tipe data")
let f = 10;
let g = "10";
let isFNotEqualG = (f != g);
console.log(isFNotEqualG); //hasilnya akan menjadi false karena kedua nilai sama yaitu 10, meskipun tipe datanya berbeda yaitu number dan string