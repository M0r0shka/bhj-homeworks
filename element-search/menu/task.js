let menu_link = Array.from(document.querySelectorAll('.menu__link'));
let sub = document.querySelectorAll('.menu_sub');
let count1 = 0, count2 = 0;
menu_link.forEach((itm) => {
    itm.onclick = (() => {
        if (itm == menu_link[1]) {
            count1++;
            if ((count1 % 2) === 0) {
                sub[0].className = 'menu menu_sub';
            } else {
                sub[0].className = 'menu menu_sub menu_active';
                return false;
            }
        }
        if (itm == menu_link[5]) {
            count2++;
            if (count2 % 2 === 0) {
                sub[1].className = 'menu menu_sub';
            } else {
                sub[1].className = 'menu menu_sub menu_active';
                return false;
            }
        }
    });
});
