const modal__active = document.getElementById('modal_main');
const modal__success = document.getElementById('modal_success');
const modal__close = document.getElementsByClassName('modal__close');

modal__active.className = 'modal modal_active';
let closePopup = Array.from(modal__close);

closePopup.forEach((itm) => {
    itm.onclick = (() => {
        if (itm == closePopup[1]) {
            modal__success.style.display = 'flex';
        }
        if (itm == closePopup[2]) {
            modal__success.style.display = 'none';
        }
        modal__active.style.display = 'none';
    });
});
