const counter = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');
function changeSizes() {
    if (image.width == 200) {
        image.width = 160;
    } else {
        image.width = 200;
    }
} ;
image.onclick = (() => {
    changeSizes();
    counter.textContent++;
});
