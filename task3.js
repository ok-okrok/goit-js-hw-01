let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
let parol = prompt('Please enter the password');
// console.log(parol);

if (parol === null) {
    message = 'Отменено пользователем!'
} else if (parol === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
} else {
    message = 'Доступ запрещен, неверный пароль!'
}

alert(message);
