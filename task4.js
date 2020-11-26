const credits = 23580;
const pricePerDroid  = 3000;
const quantityBuy = prompt('How much droids do you want to buy');

if (quantityBuy === null) {
    console.log('Отменено пользователем!');
} else {
    let totalPrice = quantityBuy * pricePerDroid;
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        var result = credits - (quantityBuy * pricePerDroid);
        console.log(`Вы купили ${quantityBuy}дроидов, на счету осталось ${result} кредитов`);
    }
}

