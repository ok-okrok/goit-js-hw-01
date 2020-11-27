let country = prompt('Please enter the country');
country = country.toLowerCase();
const China = 'китай'
const Chily = 'чили'
const Austrlia = 'австралия'
const India = 'индия'
const Yamaika = 'ямайка'

let price;

switch (country) {
    case China:
        price = 100;
        break;
    case Chily:
        price = 250;
        break;
    case Austrlia:
        price = 170;
        break;
    case India:
        price = 80;
        break;
    case Yamaika:
        price = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна');
}

console.log(`Доставка в ${country} будет стоить ${price} кредитов`);