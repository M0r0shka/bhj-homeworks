const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
for (let i = 1; i < 10; i++) { 
    let a = 'hole' + i;
    let hole = document.getElementById(a);
    hole.onclick =  (() => {
        if (hole.className.includes( 'hole_has-mole' )) {
            dead.textContent++;} else {
                lost.textContent++;
            } 
        if (dead.textContent == 10) {
            alert('Победа!');
            dead.textContent = 0;
            lost.textContent = 0; } else 
            if (lost.textContent == 5) {
                alert('Вы проиграли.');
                dead.textContent = 0;
                lost.textContent = 0;
            }
     });
  }
