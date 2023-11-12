function calcCarPriceAndDelivery() {
    const cartWrapper = document.querySelector(".cart-wrapper");
    const cartItem = cartWrapper.querySelectorAll(".cart-item");
    const totalPrice = document.querySelector(".total-price");
    const deliveryCost = document.querySelector(".delivery-cost");
    const cartDelivery = document.querySelector("[data-cart-delivery]");

    let priceTotal = 0;

    cartItem.forEach((item) => {
        const amountElem = parseInt(item.querySelector("[data-counter]").innerText);
        const priceElem = parseInt(item.querySelector(".price__currency").innerText);

        const currentPrice = amountElem * priceElem;

        priceTotal += currentPrice;

   });
   totalPrice.innerText = priceTotal;

   //скрываем/показывам блок со стоимостью доставки взависимости от итоговой цены
   if(priceTotal > 0) {
    cartDelivery.classList.remove("none");
   }
   else {
    cartDelivery.classList.add("none");
   }

   //определям цену доставки в зависимости от цены всех товаров в корзине
   if(priceTotal >= 600) {
        deliveryCost.classList.add("free");
        deliveryCost.innerText = "Бесплатно";
   } else if(priceTotal > 0){
    totalPrice.innerText = +totalPrice.innerText + 250;
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "250 ₽";
   }
}