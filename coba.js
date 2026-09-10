function jumlah(a, b){
    const result = a + b;
    return result;
    //return tidak akan mengembalikan hasil dari function
}

function luasPersegi(sisi){
    const result = sisi ** sisi;
    return result;
}

console.log(luasPersegi(19))

function sapaByZona(waktu){
    let result = "";
    if(waktu === "pagi"){
        let result = "selamat pagi";
    }else if (waktu === "siang"){
        let result = "selamat siang";
    } else if (waktu === "sore"){
        let result = "selamat sore";
    } else if (waktu === "malam"){
        let result = "selamat malam";
    }
    else {
        result = "waktu tidak valid";
    }
    return result;
}


function sapaByZoneRingkas(waktu){
    return "selamat" + waktu;
    //return 'selamat ${waktu};
}



console.info("zona tanpa kondisi");
const hey = sapaByZona("malam") === sapaByZoneRingkas("malam");
console.info("apakah kedua fungsi sama")
console.log(hey)


