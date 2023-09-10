import {buyItem} from './orderHandler.js'

const orderTable = document.querySelector('.order__main');
const tableBody = document.querySelector('.table__body');


document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

function handleDOMContentLoaded() {
    let selectedItem = {}; 
    let serialNo = 1;
    //indexing wise strigify
    const selectedItems = JSON.parse(localStorage.getItem('selectedItem'));
    console.log(selectedItems);
    selectedItems.forEach( selectedItemObj => {
        selectedItem = selectedItemObj;
        console.log(selectedItem);
        if(selectedItem) {
            const newRow = document.createElement('tr');
            newRow.classList.add("table__row");
            const subTotal = selectedItem.price * selectedItem.quantity;
            newRow.innerHTML = `
            <td class="order__serial"><p><span>${serialNo}</span></p></td>
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
                        <button class="minus-btn">-</button>
                        <span class="quantity">${selectedItem.quantity}</span>
                        <button class="plus-btn">+</button>
                    </p>
                    </td>
                <td class="order__subtotal">
                <p><span class="sub-total">$${subTotal}</span></p>
                </td>
                `
                tableBody.appendChild(newRow);
                const plusBtns = document.querySelectorAll('.plus-btn');
                const minusBtns = document.querySelectorAll('.minus-btn');
                const quantitys = document.querySelectorAll('.quantity');
                const partialTotals = document.querySelectorAll('.sub-total');
                console.log(selectedItem.subTotal);
                console.log(plusBtns);
                console.log(minusBtns);
                console.log(quantitys);
                console.log(partialTotals);
            }
            else {
                console.log("no data");
            }
            serialNo++;
    });
}