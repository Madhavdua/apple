let items = document.getElementsByClassName("items")
let names = document.getElementsByClassName('navName')

let footer=document.getElementById('header');

let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');

let search=document.getElementById('search')

function burger() {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle('hide')
    }
    footer.classList.toggle('opac')
    bar1.classList.toggle('cross1');
    bar2.classList.toggle('hide');
    bar3.classList.toggle('cross3');
    for (let i = 0; i < names.length; i++) {
        names[i].classList.toggle('hide')
    }
}