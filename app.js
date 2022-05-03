const main = document.createElement('main-market');
const selectProducts = document.getElementById("select-products");

window.addEventListener('load',loadselect);

function loadselect () {
    products.map(element=> {
    const opt = document.createElement('option');
    opt.textContent = element.name;
    opt.value = element.name;
    selectProducts.appendChild(opt);
});
}


products.map(element =>{console.log(element.name)});