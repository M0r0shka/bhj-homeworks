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
