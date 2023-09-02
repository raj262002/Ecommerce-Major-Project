import {buyItem} from './orderHandler.js'

const orderTable = document.querySelector('.order__main');
const tableBody = document.querySelector('.table__body')

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

function handleDOMContentLoaded() {
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

    if(selectedItem) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="order__serial"><p><span>1</span></p></td>
            <td class="order__product">
                <div class="product__container">
                    <img src="${selectedItem.imgURL}" alt="product image">
                </div>
                <div class="product__description">
                    <h3>${selectedItem.name}</h3>
                    <p>Items :<span>2402 2018 1488</span></p>
                    <p>Material :<span>Cotton</span></p>
                    <p>Color :<span>Blue</span></p>
                </div>
            </td>
            <td class="order__price">
                <p><span>$${selectedItem.price}</span></p>
            </td>
            <td class="order__quantity">
                <p>
                    <button style="display: block;">-</button>
                    <span>${selectedItem.quantity}</span>
                    <button style="display: block;">+</button>
                </p>
            </td>
            <td class="order__subtotal">
                <p><span>$${selectedItem.subTotal}</span></p>
            </td>
        `
        tableBody.appendChild(newRow);
        console.log(selectedItem.subTotal);
        console.log(selectedItem);
    }
    else {
        console.log("no data");
    }
}