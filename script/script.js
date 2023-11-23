const containerElement = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {

    /* prova creazione div con append
    const divElement = document.createElement('div');
    document.querySelector('div').classList.add('bg-primary');
    document.querySelector('div').classList.add('square');
    divElement.append(i);
    containerElement.append(divElement);  */

    if (i % 3 == 0 & i % 5 == 0) {

        const squareMarkup = `<div class="square bg-warning"> fizzbuzz </div>`;
        containerElement.insertAdjacentHTML("beforeend", squareMarkup);

    } else if (i % 5 == 0) {

        const squareMarkup = `<div class="square bg-danger"> buzz </div>`;
        containerElement.insertAdjacentHTML("beforeend", squareMarkup);

    } else if (i % 3 == 0) {

        const squareMarkup = `<div class="square bg-secondary"> fizz </div>`;
        containerElement.insertAdjacentHTML("beforeend", squareMarkup);

    } else {

        const squareMarkup = `<div class="square bg-primary"> ${i} </div>`;
        containerElement.insertAdjacentHTML("beforeend", squareMarkup);

    }


}