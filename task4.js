const credits = 23580;
const pricePerDroid  = 3000;
const quantityBuy = prompt('How much droids do you want to buy');
let message = 'Отменено пользователем!'

if (quantityBuy === null) {
} else {
    let totalPrice = quantityBuy * pricePerDroid;
    if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';
    } else {
        var result = credits - (quantityBuy * pricePerDroid);
        message = `Вы купили ${quantityBuy} дроидов, на счету осталось ${result} кредитов`;
    }
}

console.log(message);

