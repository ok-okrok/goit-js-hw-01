let message;
let mistake;
let total = 0;

do {
    let input = prompt('Please input a number');
    if (input === null) {
        mistake = 'Canceled by user'
        break
    }

    input = Number(input);
    
    if (Number.isNaN(input)) {
        console.log('Please input a number, not a text');
        continue;
    }

    total += input;

} while (true);


message = `Общая сумма чисел равна ${total}`;
console.log(message);
console.log(mistake);









// let total = 0;

// while (true) {
//     let input = prompt('Please input a number');
//     if (input === null) {
//         console.log('Canceled by user');
//         break;
//     }

//     input = Number(input);
//     let notNumber = Number.isNaN(input);

//     if (notNumber) {
//         console.log('Please input a number, not a text');
//         continue;
//     }

//     total += input;
// } 

// console.log(`Общая сумма чисел равна ${total}`)
