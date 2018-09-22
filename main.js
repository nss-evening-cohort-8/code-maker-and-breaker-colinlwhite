// console.log("Hello World!");

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
  }

  const test = () => {
      let test1 = 1 + 1; 
      printToDom(test1, 'outputOne');
  }

  test();