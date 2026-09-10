 //first class citizen adalah function yang dapat ditulis layaknya variabel
const umurMutlipy = function (umur){
    return umur * 2;
}

function multiply(numA, numB){
    return numA * numB;
}

function namaSaya(){
    return "Nama Saya"
}

function namaLengkap(yah, nama){
    return yah() + nama;
}

console.log(namaLengkap(namaSaya, " fadel"))

function calculate(operation,num){
    return operation(num) / 2; //return nya adalah eksekusi sebuah fungsi
}

const result = calculate(umurMutlipy,3);
console.log(result); 
//console.log(calculate(umurMutlipy(21), 2));//error karena argumen operasi diisi dengan 
//console.log(calculate(umurmultiply(2, 2), 3));//error

function multiplier(x){
    return function (num){
        return x * num;
    }
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(10));