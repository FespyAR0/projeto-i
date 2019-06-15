const mapaFundo = document.querySelector('[data-screen="1"]');
const pontoInfo = document.querySelector('[data-screen="1"] .info-ponto');
const ponto = document.querySelector('.ponto');
const back = document.querySelector('[data-screen="1"] .back');

function interacao1(){
    ponto.classList.toggle('act');
    pontoInfo.classList.toggle('act');
}

ponto.addEventListener("click", interacao1);
back.addEventListener("click", interacao1);


const btnIcon = document.querySelector('[data-screen="1"] .cta .icon');
const screen2 = document.querySelector('[data-screen="2"]');

function interacaoScreen(){
    screen2.classList.add('act');
    mapaFundo.classList.remove('act');
}

btnIcon.addEventListener("click", interacaoScreen);


const back2 = document.querySelector('[data-screen="2"] .back');

back2.addEventListener("click", function (){
    screen2.classList.remove('act');
    mapaFundo.classList.add('act');
})


