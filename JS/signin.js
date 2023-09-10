'use strict'

import { userAdd } from "./userHandler.js";

const submitBtn = document.querySelector('.submit-btn');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');

console.log(emailInput.value);

submitBtn.addEventListener('click', () => {
    if(emailInput.value && passwordInput.value){
        console.log(emailInput.value);
        console.log(passwordInput.value);
    } else {
        window.alert("please enter your email adderess and password");
    }
    // Authentic user or not
    const userJSONarray = localStorage.getItem(user);
    const userParseArray = JSON.parse(userJSONarray);
    userParseArray.forEach(user => {
        if(emailInput.value !== user.email){
            window.alert("please sign up");
        }
    });
})