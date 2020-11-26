let total = 0;

while (true) {
    let input = prompt('Please input a number');
    if (input === null) {
        console.log('Canceled by user');
        break;
    }

    input = Number(input);
    let notNumber = Number.isNaN(input);

    if (notNumber) {
        console.log('Please input a number, not a text');
        continue;
    }

    total += input;
} 

console.log(`Общая сумма чисел равна ${total}`)
