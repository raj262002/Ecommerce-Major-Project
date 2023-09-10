import {buyItem} from './orderHandler.js'

console.log("hi");

const buyNowBtns = document.querySelectorAll('.buy__now');
let selectedItems = [
];

buyNowBtns.forEach(buyNowBtn => {
    // console.log(buyNowBtn.parentElement.childNodes[5].innerHTML);
    let imgURL = buyNowBtn.parentElement.childNodes[1].currentSrc;
    let name = buyNowBtn.parentElement.childNodes[3].childNodes[1].innerHTML;
    let price = parseFloat(buyNowBtn.parentElement.childNodes[5].innerHTML);
    buyNowBtn.addEventListener("click", () => {
        let selectedItem = {
            imgURL: imgURL,
            name: name,
            price: price,
            quantity: 1,
            subTotal: 20.00
        };
        selectedItems.push(selectedItem);
        console.log("at click event");
        console.log(selectedItems);
        buyItem(selectedItems);
    });
    console.log("After click event");
    console.log(selectedItems);
});
console.log("After For Each")
console.log(selectedItems);