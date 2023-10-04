let userKilometre = prompt('Quanti chilometri devi percorrere?');
console.log(userKilometre);

let price = (userKilometre * 0.21);
console.log(price);

let userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

const discountJunior = (price * 20 / 100);

const discountSenior = (price * 40 / 100);

if(userAge < 18 ){
    console.log('Il biglietto che pagherai è di' + ' ' + discountJunior + ' ' + 'euro');    
}else if(userAge > 65) {
    console.log('Il biglietto che pagherai è di' + ' ' + discountSenior + ' ' + 'euro');
}else {
    console.log ('Il biglietto che pagherai è di' + ' ' + price + ' ' + 'euro');
}
