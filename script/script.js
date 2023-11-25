const containerElement = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {

    /* prova creazione div con append */
    const divElement = document.createElement('div');
    divElement.classList.add('square');
    

    //let squareMarkup = "";

    if (i % 3 === 0 & i % 5 === 0) {

        divElement.classList.add('bg-warning');
        divElement.append("FizzBuzz");
        /* squareMarkup = `<div class="square bg-warning"> fizzbuzz </div>`; */

    } else if (i % 5 === 0) {

        divElement.classList.add('bg-danger');
        divElement.append("Buzz");
        /* squareMarkup = `<div class="square bg-danger"> buzz </div>`; */

    } else if (i % 3 === 0) {

        divElement.classList.add('bg-secondary');
        divElement.append("Fizz");
        /* squareMarkup = `<div class="square bg-secondary"> fizz </div>`; */

    } else {

        divElement.classList.add('bg-primary');
        divElement.append(i);
        /* squareMarkup = `<div class="square bg-primary"> ${i} </div>`; */

    }

    containerElement.append(divElement);

    /* containerElement.insertAdjacentHTML("beforeend", squareMarkup); */


}