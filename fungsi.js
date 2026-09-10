//deklarasi function sebenarnya mirip dengan pembuatan variabel. nama lain dari function dalah identification


//identifier = nama fungsi
//sepakat pakai case di setiap function yang dibuat 
// () parantehess => menyimpan paarameter/arguments
// {} curly braces => isi dari fungsi yang akan berjalan
//return untuk mengembalikan atau memberikan output dari fungsinya
function greetwork(){
    console.log("hello world")
}

function convertCelciusToFarenheit(temperature){
    const temperatureInfFarenheit = 9/5 * temperature + 32;

    return console.log("hasil konversi celcius ke fahrenheit adalah :" + temperatureInfFarenheit)
}

convertCelciusToFarenheit(20); //68 //contoh menggunakan ekspresi langsung = 68
convertCelciusToFarenheit(10); //58 //contoh menggunakan ekspresi langsung = 58

const temperaturInCelicius = 50
convertCelciusToFarenheit(temperaturInCelicius);

console.log(convertCelciusToFarenheit(30));

//salah satu kelebihan javascript  ==> hoisting memungkinkan kita menulis kode pemanggilan sebelum kode pendeklaratian function

doubleTwo(4);
doubleTwo(); //NaN
fulName();// undefined
function doubleTwo(number){
if(number !== NaN){
    console.log("parameter kosong");
}else {
    console.log(number * 2);
    }
}

//fungsi nya bisa langsung dipakai sebelum mendeklarasikan functionnya

fulName("ahmad", "irsyad");
function fulName(namaPertama, namaKedua){
    console.log(namaPertama + " " + namaKedua)
}
