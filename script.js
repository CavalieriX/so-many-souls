const audio = document.getElementById('trilha-terror');
const frases = document.querySelectorAll('.frase');

window.addEventListener('click', () => {    
    if (audio.paused) {
        audio.play();
        iniciarSequencia(); 
    }
}, { once: true }); 

function iniciarSequencia() {
  
    setTimeout(() => {
        frases[0].classList.add('visivel');
    }, 3000);

    setTimeout(() => {
        frases[0].classList.remove('visivel');
    }, 13000);

    setTimeout(() => {
        frases[1].classList.add('visivel');
    }, 22000);

    setTimeout(() => {
        frases[1].classList.remove('visivel');
    }, 37000);

    setTimeout(() => {
        frases[2].classList.add('visivel');
    }, 45000);

    setTimeout(() => {
        frases[2].classList.remove('visivel');
    }, 53000);
    
    setTimeout(() => {
        frases[3].classList.add('visivel');
    }, 61000);

    setTimeout(() => {
        frases[3].classList.add('corte-seco');
    }, 63000);
}