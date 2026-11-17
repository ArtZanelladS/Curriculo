function openNav(){
    document.getElementById("mysidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav(){
    document.getElementById("mysidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}
function mudarFonte(fonte) {
    document.body.style.fontFamily = `'${fonte}', sans-serif`;
}

// CARROSSEL

const imagens = document.querySelectorAll(".carousel-item");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let inicio = 0;

// MOSTRAR IMAGENS

function mostrarImagens(){

    imagens.forEach((img) => {
        img.classList.remove("active");
    });

    for(let i = inicio; i < inicio + 3; i++){

        if(imagens[i]){
            imagens[i].classList.add("active");
        }

    }

}

// BOTÃO DIREITA

nextBtn.addEventListener("click", () => {

    inicio += 2;

    if(inicio >= imagens.length){
        inicio = 0;
    }

    mostrarImagens();

});

// BOTÃO ESQUERDA

prevBtn.addEventListener("click", () => {

    inicio -= 2;

    if(inicio < 0){
        inicio = imagens.length - 3;
    }

    mostrarImagens();

});

// INICIAR

mostrarImagens();

const track = document.querySelector(".carousel-track");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const imagens = document.querySelectorAll(".carousel-track img");

let index = 0;

/*
    250px = largura da imagem
    20px = gap
*/

const imageWidth = 270;

// MOVER CARROSSEL

function atualizarCarrossel(){

    track.style.transform =
        `translateX(-${index * imageWidth}px)`;

}

// BOTÃO DIREITA

nextBtn.addEventListener("click", () => {

    // TOTAL = 5 imagens
    // MOSTRANDO = 3 imagens

    if(index < imagens.length - 3){

        index++;

        atualizarCarrossel();

    }

});

// BOTÃO ESQUERDA

prevBtn.addEventListener("click", () => {

    if(index > 0){

        index--;

        atualizarCarrossel();

    }

});