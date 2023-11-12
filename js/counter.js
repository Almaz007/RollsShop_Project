//пример мой для всех кнопок

// const btnMinus = document.querySelectorAll('[data-action="minus"]');
// const btnPlus = document.querySelectorAll('[data-action="plus"]');
// console.log(btnMinus.length);

// //отслеживаем клик на кнопку -
// btnMinus.forEach(e => {
//     e.addEventListener('click', () => {
//         // e.nextElementSibling.innerHTML = e.nextElementSibling.innerHTML > 1 
//         //                                 ? --e.nextElementSibling.innerHTML 
//         //                                 : e.nextElementSibling.innerHTML;
//         if(parseInt(e.nextElementSibling.innerText) > 1) --e.nextElementSibling.innerHTML;
//     });
// });

// //отслеживаем клик на кнопку +
// btnPlus.forEach(e => {
//     e.addEventListener('click', () => {
//          ++e.previousElementSibling.innerHTML;
//     });
// });

//решение с ютуба немного видоизмененный

window.addEventListener('click', (event) => {

    if(event.target.dataset.action !== "minus" && event.target.dataset.action !== 'plus'){
        return; 
    }
    const counterWrapper = event.target.closest(".counter-wrapper");
    let counter = counterWrapper.querySelector("[data-counter]");

    if(event.target.dataset.action === "minus" ) { 

        if(counter.innerText > 1) --counter.innerText;
        else if(event.target.closest(".cart-wrapper") && parseInt(counter.innerText) === 1) {//проверка на то, был ли совершен клик на товар в корзине
            event.target.closest(".cart-item").remove();
            toggleCartStatus();
            //пересчет суммы для итого
            calcCarPriceAndDelivery();
        }
    }

    if(event.target.dataset.action === "plus") ++counter.innerText;

    if(event.target.closest(".cart-wrapper"))  calcCarPriceAndDelivery();
});