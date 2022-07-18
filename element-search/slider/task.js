let prev = document.getElementsByClassName('slider__arrow_prev');
let next = document.getElementsByClassName('slider__arrow_next');
let image = Array.from(document.getElementsByClassName('slider__item'));

next.item(0).onclick = function () {
    let itemActive = image.findIndex(item => {return item.className == 'slider__item slider__item_active';});
    image[itemActive].className = 'slider__item';
    (itemActive < image.length-1) ? itemActive++ : itemActive = 0;
    image[itemActive].className = 'slider__item slider__item_active';
} 

prev.item(0).onclick = function () {
    let itemActive = image.findIndex(item => {return item.className == 'slider__item slider__item_active';});
    image[itemActive].className = 'slider__item';
    ((itemActive > 0) && (itemActive < image.length +1) ) ? itemActive-- : itemActive = (image.length - 1);
    image[itemActive].className = 'slider__item slider__item_active';
} 
















/*
function itemActive(item, idx) {
    console.log(item.className);


    return item.className == "slider__item slider__item_active";
}
let bf = image.findIndex(itemActive);
console.log(bf);
*/
/*
let count = 0;
function sliderScroll() {
    count++;
    image[count].className = 'slider__item slider__item_active';
}

function sliderScrollBack() {
    count--;
    image[count].className = 'slider__item slider__item_active';
}

function itemNoActive() {
    for (let i = 0; i < image.length; i++) {
        image[i].className = 'slider__item';
    }
}

next.item(0).onclick = function () {
    if (count < (image.length - 1)) {
        sliderScroll();
    } else {
        itemNoActive();
        count = -1;
        sliderScroll();
    }
} 

prev.item(0).onclick = function () {
    itemNoActive();
    if ((count < (image.length)) && (count > 0)) {
        sliderScrollBack();
    } else {
        itemNoActive();
        count = image.length;
        sliderScrollBack();
    }
} 

*/