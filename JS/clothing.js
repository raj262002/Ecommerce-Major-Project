import {buyItem} from './orderHandler.js'

const buyNowBtns = document.querySelectorAll('.buy__now');
let selectedItem = {
    imgURL: './assets/jean_1.jpg',
    name: 'Jeans',
    price: 20.00,
    quantity: 1,
    subTotal: 20.00
};

buyNowBtns.forEach(buyNowBtn => {
    // console.log(buyNowBtn.parentElement.childNodes[5].innerHTML);
    let imgURL = buyNowBtn.parentElement.childNodes[1].currentSrc;
    let name = buyNowBtn.parentElement.childNodes[3].childNodes[1].innerHTML;
    let price = parseFloat(buyNowBtn.parentElement.childNodes[5].innerHTML);
    buyNowBtn.addEventListener("click", () => {
        selectedItem.imgURL = imgURL;
        selectedItem.name = name;
        selectedItem.price = price;
        selectedItem.subTotal = selectedItem.price * selectedItem.quantity;
        buyItem(selectedItem);
    });
});