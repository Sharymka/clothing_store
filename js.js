"use strict";

let cart = document.querySelector('.header-cart'); // корзина в шапке страницы
let tagCounter = document.querySelector('.count_items'); //розовый счетчик на корзине
let btnCart = document.querySelectorAll('.btn-add'); // всплывающие кнопки "Add To Cart" всех товаров 
let itemList = document.querySelector('.items-list'); // список товаров, добавленных в корзину (появляется при нажатии на ссылку корзины в шапке страницы)
let headerCart = document.querySelector('.header-cart-list'); // шапка списка товаров
let footerCart = document.querySelector('.footer-cart-list'); // подвал списка товаров
let footerCartSpan = footerCart.querySelector('span');// элемент span в подвале списка товаров, туда добавляем общую сумму всех товаров
let producArrayName = []; // массив имен товаров, каждый элемент - это строка
let blockHtml = []; // массив карточек товара, которые добавили в корзину, каждый элемент - объект
let allItemsAmount = 0; //общее количество товара
let totalSum = 0; // общая сумма всей корзины

// обработчик события при клике на кнопку "Add to Cart".
btnCart.forEach(function(button) {
    button.addEventListener('click', function(event) {

        // увеличели счетчик в розовом кружке
        tagCounter.value = addItems();

        // получили объект родителя родителя кнопки на которой произошло событие
        let parentBlock = getParentDiv(event.target);

        // получили объект продукта с параметрами, который хотим добавить в корзину
        let product = getProduct(parentBlock);

        // проверяем добавляли уже такой товар, если да, то заходим в ветвление и увеличиваем общую сумму конкретного товара
        if(isProductAdded(product)) {
            blockHtml.forEach(function(el) {

                if (product.name.includes(el.item.children[0].innerText)) {
                    let amount = parseInt(el.item.children[1].innerText);
                    amount++;
                    el.item.children[1].innerText = String(amount);
                    el.item.children[3].innerText = `$${parseFloat(getTotalPrice(el.item.children[2].innerText, amount)).toFixed(2)}`;
                }
                
            })
        };

        // увеличиваем общую сумму за все товары
        totalSum += parseFloat(product.totalPrice);
        footerCartSpan.innerText = `$${parseFloat(totalSum).toFixed(2)}`; 

    });
});

cart.addEventListener('click', function() {
    switch(itemList.style.opacity) {
        case '': itemList.style.opacity = '1';
            break;
        case '1': itemList.style.opacity = '';
            break;    
    }    
})
/* Ф-ция увеличивает счетчик товаров при клике на кнопку "Add to Cart"
* @ return {number} - возвращаем число, количество товара,
*/
function addItems() {
    if (allItemsAmount >= 9) {
        tagCounter.style.paddingLeft = "1.8px";
    }
    return ++allItemsAmount;
}

/* Ф-ция отдает объект родителя родителя кнопки, по которй кликнули.
* @ param {object} - кнопка "Add to Cart" , по которой кликнули,
* @ return {object} - возвращаем объект, родителя родителя
*/
function getParentDiv(target) {
    if(target.localName === 'img') {
        return target.parentNode.parentNode.parentNode;
    }
    return target.parentNode.parentNode;
}

/* Ф-ция отдает объект с параметрами товара, по которому кликнули.
* @ param {object} - кнопка "Add to Cart" , по которой кликнули,
* @ return {object} - возвращаем объект, с параметрами товара цена, имя, количество, общая стоимость
*/
function getProduct(parentBlock) {
    let amount = 0;
    amount++;
    let name = parentBlock.querySelector('.item-title').innerText;
    let price = parentBlock.querySelector('.item-price').innerText;
    let totalPrice = getTotalPrice(price, amount);
 
    return {
        name,
        price,
        amount,
        totalPrice,
    }  
}

/* Ф-ция считает общую стоимость товара
* @ param 1 {string} - цена товара
  @ param 2 {number} - количество товара
* @ return {object} - возвращаем общую стоимость за n количества товара
*/
function getTotalPrice(price, amount) {

    return amount * price.split('').filter(el => el !=='$').join('');
}

/* Ф-ция проверяет был ли добавлен уже такой товар
* @ param {object} - объект с параметрами о товаре, который хотим добавить
* @ return {object} - возвращаем объект, с параметрами товара цена, имя, количество, общая стоимость
*/
function isProductAdded(product) {

    if(!producArrayName.includes(product.name)){
        producArrayName.push(product.name);
        blockHtml.push(creatHtmlBlock(product));   
    } else { 
        return true;
    }   
}

/* Ф-ция создает html разметку в сплывающем окне корзины 
* @ param {object} - объект с параметрами о товаре, которые хотим увидеть на странице при наведении на корзину
* @ return {object} - возвращаем объект, html разметка с параметрами товара
*/
function creatHtmlBlock(product) {

    // создали div - карточка товара, родитель
    let item = document.createElement('div');
    item.classList.add('header-cart-list');

    // создали div - общая сумма, выбранного количества товара
    let totalPrice = document.createElement('div');
    totalPrice.classList.add('quantity');
    totalPrice.classList.add('category');
    totalPrice.innerHTML = `$ ${product.totalPrice}`;

    // создали div - цена единицы товара
    let price = document.createElement('div');
    price.classList.add('price');
    price.classList.add('category');
    price.innerHTML = `${product.price}`;

    // создали div - количество товара
    let amount = document.createElement('div');
    amount.classList.add('quantity');
    amount.classList.add('category');
    amount.innerHTML = `${product.amount}`;

    // создали div - имя товара
    let name = document.createElement('div');
    name.classList.add('name-item');
    name.classList.add('category');
    name.innerHTML = `${product.name}`;

    // добавили всех детей(характеристики товара) в родителя - карточка товара
    item.insertAdjacentElement('afterbegin', totalPrice);
    item.insertAdjacentElement('afterbegin', price);
    item.insertAdjacentElement('afterbegin', amount);
    item.insertAdjacentElement('afterbegin', name);
    
    // добавили карточку товара в разметку html
    footerCart.insertAdjacentElement('beforebegin', item);

    return {
        item,
    }
}




