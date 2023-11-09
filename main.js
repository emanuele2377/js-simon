const insericiNumero1 = prompt("inserici un numero")
const insericiNumero2 = prompt("inserici un numero")
const insericiNumero3 = prompt("inserici un numero")
const insericiNumero4 = prompt("inserici un numero")
const insericiNumero5 = prompt("inserici un numero")



for (let i = 1; i <= 5; i++) {
    let numeri = Math.floor((Math.random() * 10) + 1);
    let numeriVisibili = numeri.innerTEXT;

    
    console.log(numeri);
}





function updateCountdown() {
    let = countDownDate ;
    let distance = countDownDate ;

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = seconds;
    console.log(seconds)
}