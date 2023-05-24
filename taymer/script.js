let soatInput = document.getElementById("soatInput");
let minutInput = document.getElementById("minutInput");
let sekundInput = document.getElementById("sekundInput");

let soatElementi = document.getElementById("soat");
let minutElementi = document.getElementById("minut");
let sekundElementi = document.getElementById("sekund");

let soat = 0;
let minut = 0;
let sekund = 0;
let taymer;

function taymerBoshla() {
    soat = parseInt(soatInput.value) || 0;
    minut = parseInt(minutInput.value) || 0;
    sekund = parseInt(sekundInput.value) || 0;

    taymer = setInterval(taymerYangilash, 1000);
}

function taymerToxtat() {
    clearInterval(taymer);
}

function taymerYangilash() {
    sekund--;

    if (sekund < 0) {
        sekund = 59;
        minut--;

        if (minut < 0) {
            minut = 59;
            soat--;

            if (soat < 0) {
                taymerToxtat();
                alert("Taymer yakunlandi!");
            }
        }
    }

    soatElementi.innerHTML = soat < 10 ? `0${soat}` : soat;
    minutElementi.innerHTML = minut < 10 ? `0${minut}` : minut;
    sekundElementi.innerHTML = sekund < 10 ? `0${sekund}` : sekund;
}