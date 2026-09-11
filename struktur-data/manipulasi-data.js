//manipulasi data didalam javascript

//menggunakan string 
let array = ["satu" , 2 , "tiga" , 4 , "lima" ,false];
console.log(array); 
array[1] = "dua"; //mengubah nilai pada index ke 1
array[3] = "empat"; //mengubah nilai pada index ke 3
array[5] = "enam"; //mengubah nilai pada index ke 5
console.log(array);

//menghapus push => menambahkan nilai ke array pada elemen terakhir
//menggunakan push 
 const arrayPush = new Array("1","dua","3","empat");
 arrayPush.push("5","enam");
 console.log(arrayPush);

//menghapus elemen dan data dalam array 
//kekurangannya hanya menghapus datanya aja, tidak menghapus elemen dari array
const arrayDelete = new Array("irsyad","fadel","fatih","dihyah");
delete arrayDelete[1]; //menghapus elemen pada index ke 1
console.log(arrayDelete); //menampilkan array setelah dihapus elemen pada index ke 1


//menghapus elemen dan data dalam array menggunakan splice
//parem pertama => indeks array
//parem kedua => jumlah elemen yang akan dihapus
const arraySplice = new Array("apel","jeruk","mangga","pisang");
arraySplice.splice(2,2);//apel 
arraySplice.splice(0,2);
console.log(arraySplice);

//menggunakan pop => menghapus elemen terakhir
const arrayPop = ["satu", "dua","tiga","empat"];
arrayPop();
console.log(arrayPop);

//menggunakan shift => menghapus elemen pertama
const arrayShift = ["satu","dua","tiga","empat"];
arrayShift.shift();
console.log(arrayShift);


const arrayBiasa = new Array("maulana","fadel","irsyad","dihyah" (name) => {return "hello" = name});  