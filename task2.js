const total = 100;
let order = prompt('Введите количество заканной продукции');

if (order > total) {
    alert('На складе недостаточно товаров!')
} else {
    alert('Заказ оформлен, с вами свяжется менеджер')
}