const input = document.getElementsByClassName('form__field')[0];
const nadzor = document.getElementsByClassName('rad-input one')[0];
const bezNadzor = document.getElementsByClassName('rad-input two')[0];
const inwentaryzacja = document.getElementsByClassName('rad-input three')[0];
const konsultacja = document.getElementsByClassName('rad-input four')[0];
const btn = document.querySelector('.button2');
const suma = document.querySelector('.sum');

function oblicz() {
    let wynik = 0;

    if (nadzor.checked) {
        wynik += Number(input.value) * 170;
    } else {
        wynik += Number(input.value) * 130;
    }

    if (inwentaryzacja.checked) {
        wynik += Number(input.value) * 10;
    }
    if (konsultacja.checked) {
        wynik += 60;
    }

    suma.innerText = `${wynik} zł`;
}


btn.addEventListener('click', () => {
    oblicz();
    console.log(input.value);
});