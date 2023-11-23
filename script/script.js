const containerElement = document.querySelector('.container');

console.log(containerElement);

for( let i = 1; i <=100 ; i++){
    const squareMarkup = `<div class="square"> ${i} </div>`;
    console.log(squareMarkup);
    containerElement.insertAdjacentHTML("beforeend", squareMarkup );
}