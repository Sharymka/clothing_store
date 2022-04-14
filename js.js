





// counterAllGoods = {

//     tagCounter: null,

//    getTagCounter() {
//        tagCounter = document.querySelector('.count_items');
//        console.log(tagCounter);
//     },

//     addItems() {
//          return ++tagCounter.value;
//     },
// }

// counterAllGoods.getTagCounter();

let btnCard = document.querySelectorAll('.btn-add');
let producArrayName = [];
let blockHtml = [];

btnCard.forEach(function(button) {
    button.addEventListener('click', function(event) {
        
        // let allItemsAmount = counterAllGoods.addItems();
        let parentBlock = getParentDiv(event.target);
        let product = getProduct(parentBlock);

        if(isProductAdded(product)) {
            blockHtml.forEach(function(el) {
                // console.log(el.title);
                if (product.name.includes(el.name)) {
                    el.amount +=1;
                    el.totalPrice = getTotalPrice(el.price, el.amount);
                    console.log(el.amount);
                }
                
            })
        };
    });
});

function getParentDiv(buttonAddToCart) {
    return buttonAddToCart.parentNode.parentNode;
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

    return `$${amount * price.split('').filter(el => el !=='$').join('')}`;
}

/* Ф-ция проверяет был ли добавлен уже такой товар
* @ param {object} - объект с параметрами о товаре, который хотим добавить
* @ return {object} - возвращаем объект, с параметрами товара цена, имя, количество, общая стоимость
*/
function isProductAdded(product) {

    if(!producArrayName.includes(product.name)){
        producArrayName.push(product.name);
        blockHtml.push(creatHtmlBlock(product)); 
        console.log(blockHtml);   
    } else { 
        return true;
    }   
}

/* Ф-ция создает html разметку в сплывающем окне корзины 
* @ param {object} - объект с параметрами о товаре, которые хотим увидеть на странице при наведении на корзину
* @ return {object} - возвращаем объект, html разметка с параметрами товара
*/
function creatHtmlBlock(product) {

    let headerList = document.querySelector('.header-cart-list');

    let item = document.createElement('div');
    item.classList.add('header-cart-list');

    let totalPrice = document.createElement('div');
    totalPrice.classList.add('quantity');
    totalPrice.classList.add('category');
    totalPrice.innerHTML = `${product.totalPrice}`;

    let price = document.createElement('div');
    price.classList.add('price');
    price.classList.add('category');
    price.innerHTML = `${product.price}`;

    let amount = document.createElement('div');
    amount.classList.add('quantity');
    amount.classList.add('category');
    amount.innerHTML = `${product.amount}`;

    let name = document.createElement('div');
    name.classList.add('name-item');
    name.classList.add('category');
    name.innerHTML = `${product.name}`;

    item.insertAdjacentElement('afterbegin', totalPrice);
    item.insertAdjacentElement('afterbegin', price);
    item.insertAdjacentElement('afterbegin', amount);
    item.insertAdjacentElement('afterbegin', name);
    
    headerList.insertAdjacentElement('afterend', item);

    return {
        name: name.innerText,
        amount: amount.innerText,
        price: price.innerText,
        totalPrice: totalPrice.innerText,
    }
}




