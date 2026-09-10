//fiunctioin biasa 
function doubleThree(number){
    return number * 3 * 2;
};

//const functiionBiasa = doubleThree();

//functtion biasa
function doublefour(number){
    return number * 3 * 2;
};

//function bisa mereturn function

//ekspretion function 
const sayZubair = function (){
    return "hallo zubair";
};

//first class citizen = function yang diperakukan layaknya sebuah nilai.

console.info("function biasa");

const sayMaul = (nama) => {
    return "hallo" + nama;
};



//penulisan lebih singkat 
//syarat nya : parameter nya cuman 1
const sayMaulDua = nama => "Hello" + nama;

//panggilan biasa
console.log(sayMaulDua("Ghazali"));

//challange : buat satu arrow function bernama hitungNilai dengan 3 parameter
//yaitu (nama,nilai Tugas dan NilaiUjian)
//ketentuannya sebagia berikut :
//- -nilai tugas memiliki bobot 40%
// -nilai ujian tidak memiliki bobot 60%
// hitung nilai akhir menggunakan operasi aritmatika 
// jika nilai akhir >= 75 "selamat nama lulus dengan nilaiAkhir"
//jika nilai akhir < 75, "mohon maaf, nama anda tidak lolos dengan nilai nilaiAkhir"

const hitungNilai = (nama, nilaiTugas, nilaiUjian) =>{
    const bobotNilaiTugas = nilaiTugas * 0.4;
    const bobotNilaiUjian = nilaiUjian * 0.6;
    const nilaiAkhir = bobotNilaiTugas * bobotNilaiUjian;

    //if(nilaiAkhir >= 75){
      //  console.log(`selamat ${nama} Lulus dengan nilai`);
    //}else{
      //  console.log(`mohon maaf, ${nama} anda tidak lolos dengan nilai Akhie`);
    //}

    return nilaiAkhir >= 75 ? console.log(`selamat ${nama} lulus dengan nilai ${nilaiAkhir}`)
    : console.log(`mohon maaf ${nama} tidak lolos dnegan nilai ${nilaiakhir}`)
}


hitungNilai("fadel",20,20)




//Sistem penentuan gaji
//wajib pakai arrow function
//buat satu function dengan nama 
// ketentuannya yaitu 
//-setiap jam lembur (per jam) mendapatkan tambahan rp.25
//-hitung total uang lembur(jumlah lembur * 25.000)
//-hitung gaji pokok sebleum bonus (jumlah lembur + lembur)
//-karyawan mendapatkan bonus berdasarkan gaji sebelum bonus dengan ketentuan:
//jika gaji >= 5.000.000 -> bonus 10%
//jika gaji >= 3.000.000 -> bonus 5%
//jika kurang dari 3.000.000 -> tidak dapat bonus
//-hitung gaji akhir (gajisebelumnya + bonus)
//gunakan ternatry