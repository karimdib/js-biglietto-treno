const userKilometre = prompt('Quanti chilometri devi percorrere?');
console.log(userKilometre);

let price = userKilometre * 0.21;
console.log(price);

let userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

if(userAge < 18){
    price = price - (price * 20 / 100)
    console.log(price + ' euro');
}else if(userAge > 65) {
    console.log(price - (price * 40 / 100) + ' ' + 'euro');
    price = price - (price * 40 / 100) 
}

const priceDomElement = document.getElementById('price')
priceDomElement.innerHTML = price.toFixed(2)