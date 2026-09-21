//buat tabel baru,dengan nama dataSuhu, elemen 1-2 number,
//kemudian elemen 3-4 adalah function, 3 adalah elemen 1 dari celcius ke farenheit 
//elemen 4 adalah function yang konversi elemen 2 dari farenheit ke celcius
const dataSuhu = [
    0, // elemen 1: suhu dalam celcius
    32, // elemen 2: suhu dalam farenheit
    function celciusToFahrenheit(celcius) { // elemen 3: function
        return (celcius * 9/5) + 32;
    },
    function fahrenheitToCelcius(fahrenheit) { // elemen 4: function
        return (fahrenheit - 32) * 5/9;
    }
];

//contoh penggunaan
const suhuCelcius = 25;
const suhuFahrenheit = dataSuhu[2](suhuCelcius); // konversi celcius ke farenheit
console.log(`${suhuCelcius}°C = ${suhuFahrenheit}°F`);