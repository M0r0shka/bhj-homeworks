const timer = document.getElementById('timer')
const count = setInterval(() => {
    timer.textContent--;
    if (timer.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(count);
      }
  }, 1000);
  