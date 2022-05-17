const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function criaSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'GMT'
  });
}

function iniciarRelogio() {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = criaSegundos(segundos);
  }, 1000);
}

iniciar.addEventListener('click', (e) => {
  iniciarRelogio();
});
pausar.addEventListener('click', (e) => {
  clearInterval(timer);
});
zerar.addEventListener('click', (e) => {
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
  timer = 0;
});