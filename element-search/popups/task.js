let modalActive = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let modalCloseTimes = Array.from(document.getElementsByClassName('modal__close_times'));
let showSuccess = document.querySelector('.show-success');

modalActive.className = 'modal modal_active';
modalCloseTimes.forEach((item) => {
    item.onclick = (() => {
        item.parentElement.parentElement.className = 'modal';
    });
});
showSuccess.onclick = (() => {
    modalActive.className = 'modal';
    modalSuccess.className = 'modal modal_active';
});