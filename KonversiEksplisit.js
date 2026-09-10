//konversi eksplisit adalah cara yang paling tepat 
let angka = 100;
let isFauzanMarried = false;
let floatNumber = 3.14;

//string(parem); parem->variable atau ekspresi yang akan dikonversi
const angkaToString = String(angka);
const isFauzanMarriedToString = String(isFauzanMarried);
const floatNumberToString = String(floatNumber);

//.toString(); tanpa parem, deklarasi setelah variabel atau ekspresi
const angkaToString2 = angka.toString();
const isFauzanMarriedToString2 = isFauzanMarried.toString();
const floatNumberToString2 = floatNumber.toString();

console.info("konfersi ke string: menggunakan String(parem)");
console.info(angkaToString);
console.info(isFauzanMarriedToString);
console.info(floatNumberToString);

console.info("konfersi ke string: menggunakan .toString()");
console.info(angkaToString2);
console.info(isFauzanMarriedToString2);
console.info(floatNumberToString2);


//2. Konversi ke Number

let strNumber = "123";
let floatNumber2 = "3,14";
let isFulanAbsen = true;

//number(parem) parem -> variabel atau ekspresi yang ingin dikonversi
const numNumber = Number(strNumber);
const numfloatNumber2 = Number(floatNumber2);
const numisFulanAbsen = Number(isFulanAbsen);

console.info("konversi ke number menggunakan Number(parem)")
console.log(numNumber);
console.log(numfloatNumber2);
console.log(numisFulanAbsen);


//parseInt(parem)
let pixel = "200";
let berat = "berat";
let tinggi = "178";

const intPixel = parseInt(pixel);
const intberat = parseInt(berat);
const inttinggi = parseInt(tinggi);

console.info("ini contoh penerapan parseInt")
console.log(intPixel);
console.log(intberat);
console.log(inttinggi);

//parseFloat()
let decimal1 = "3.14";
const floatDecimal1 = parseFloat(decimal1);

console.info("ini contoh penerapan parseFloat")
console.log(floatDecimal1);

//boolean()
//daftar nilai falsy dalam javascript: false,0,-0,0n,'',null,undefined,NaN

//3.konversi boolean
let number = 123;
let string3 = "string";
let empty = null;
let kosong = '';
let itulah = undefined;


console.info("konversi ke boolean")
console.log(Boolean(number)); //contoh variabel
console.log(Boolean(string3)); //contoh ekspresi
console.log(Boolean(empty));
console.log(Boolean(kosong));
console.log(Boolean(itulah));


//konversi implicit adalah konversi yang dilakukan secara otomatis oleh javascript, biasanya terjadi ketika kita melakukan operasi pada tipe data yang berbeda.