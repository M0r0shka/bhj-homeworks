let sub = Array.from(document.querySelectorAll('.menu_sub'));
sub.forEach((item) => {
    let subOpen = item.closest('.menu__item').querySelector('a');
    subOpen.onclick = (() => {
        if (item.className == 'menu menu_sub') {
            item.className = 'menu menu_sub menu_active';
        } else {
            item.className = 'menu menu_sub';
        } 
        return false;
    });
});