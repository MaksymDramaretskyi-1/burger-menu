// DATATYPES
// Primative datatypes
//string
// number
// boolean

//VARAIBLES
// let
//const
//var

// let userName = 'Maksym';
// console.log(typeof userName);


// let userAge = 26;

// let isPresent = true;

// function infoText () {
//   const firstName = 'Maksym';
//   const lastName = 'Dramaretskyi';

//   console.log(` ${firstName} ${lastName}`)

//   const main = document.querySelector('main');
//   main.textContent = `${firstName} ${lastName}`;
// }

// infoText();

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
  
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      nav.classList.toggle("active");
    });
  });  