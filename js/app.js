let userKilometre = prompt ('Quanti chilometri devi percorrere?');
console.log(userKilometre);

let price = userKilometre * 0.21;
console.log(price);

let userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

if(userAge < 18){
    console.log( price - (price * 20 / 100));    
}else if(userAge > 65) {
    console.log(price - (price * 40 / 100));
}else {
    console.log (price);
}
