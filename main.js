// console.log("Hello World!");

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
  }
// TEST FUNCTION FOR PRINT TO DOM - START
//   const test = () => {
//       let test1 = 1 + 1; 
//       printToDom(test1, 'outputOne');
//   }
//   test();
// TEST FUNCTION FOR PRINT TO DOM - END

const buttonOne = document.getElementById('secretButton');
const buttonTwo = document.getElementById('wordsButton');
const inputOneElem = document.getElementById('inputOne');
const outputOneElem = document.getElementById('outputOne');
const inputTwoElem = document.getElementById('inputTwo');
const outputTwoElem = document.getElementById('outputTwo');





buttonOne.addEventListener('click', (event) => {
    console.log(event);
});



