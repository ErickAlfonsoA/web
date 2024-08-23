const div = document.getElementById('navBar');
const logo = document.getElementById('navBrand');
const boton = document.getElementsByClassName('nav-link');

let prevY = window.scrollY;

const llaves = Object.keys(jsonCat[0]);

var llaves2 = "";

var i = 0;
var z = 0;

while(i<llaves.length){//llaves.length){
    z = 0;
    const acordion = document.getElementById('accordionFlushExample');
    const acordionItem = document.createElement('div');
    const acordionHeader = document.createElement('h2');
    const acordionButton = document.createElement('button');

    const flushCollapse = document.createElement('div');
    const acordionBody = document.createElement('div');
    const listGroup = document.createElement('ul');
    const listGroupItem = document.createElement('li');
    const acordionItem2 = document.createElement('div');
    const acordionHeader2 = document.createElement('h2');
    const acordionButton2 = document.createElement('button')

    const collapseOne = document.createElement('div');
    const acordionBody2 = document.createElement('div');

    acordionItem.classList.add('accordion-item');
    acordionItem.setAttribute('id', llaves[i]);
    acordion.append(acordionItem);

    acordionHeader.classList.add('accordion-header');
    acordionItem.append(acordionHeader);

    acordionButton.classList.add('accordion-button');
    acordionButton.setAttribute('data-bs-toggle', 'collapse');
    acordionButton.setAttribute('data-bs-target', '#flush-collapseOne'+i);
    acordionButton.setAttribute('aria-expanded', 'false');
    acordionButton.setAttribute('aria-controls', 'flush-collapseOne'+i);
    acordionButton.type = 'button';
    acordionButton.innerText = llaves[i];
    acordionHeader.appendChild(acordionButton);

    flushCollapse.setAttribute('id', 'flush-collapseOne'+i);
    flushCollapse.classList.add('accordion-collapse', 'collapse');
    flushCollapse.setAttribute('data-bs-parent', '#accordionFlushExample');
    acordionItem.appendChild(flushCollapse);

    acordionBody.classList.add('accordion-body');
    flushCollapse.appendChild(acordionBody);

    listGroup.classList.add('list-group');
    acordionBody.appendChild(listGroup);

    llaves2 = jsonCat[0][llaves[i]];
    llaves2 = Object.keys(llaves2);

    while(z<llaves2.length){//for(var i=0;i<llavesHematologia.length;i++){
        const listGroupItem = document.createElement('li');
        const acordionItem2 = document.createElement('div');
        const acordionHeader2 = document.createElement('h2');
        const acordionButton2 = document.createElement('button')

        const collapseOne = document.createElement('div');
        const acordionBody2 = document.createElement('div');

        listGroupItem.classList.add('list-group-item');
        listGroup.appendChild(listGroupItem);

        acordionItem2.classList.add('accordion-item');
        listGroupItem.appendChild(acordionItem2);

        acordionHeader2.classList.add('accordion-header');
        acordionItem2.appendChild(acordionHeader2);

        acordionButton2.classList.add('accordion-button');
        acordionButton2.setAttribute('data-bs-toggle', 'collapse');
        acordionButton2.setAttribute('data-bs-target', '#collapseOne'+z+i);
        acordionButton2.setAttribute('aria-expanded', 'true');
        acordionButton2.setAttribute('aria-controls', 'collapseOne'+z+i);
        acordionButton2.type = 'button';
        acordionButton2.innerText = llaves2[z];//llavesHematologia[z];
        acordionHeader2.appendChild(acordionButton2);

        collapseOne.setAttribute('id', 'collapseOne'+z+i);
        collapseOne.classList.add('accordion-collapse', 'collapse');
        collapseOne.setAttribute('data-bs-parent', '#accordionExample');
        acordionItem2.appendChild(collapseOne);

        acordionBody2.classList.add('accordion-body');
        acordionBody2.innerText = jsonCat[0][llaves[i]][llaves2[z]];
        collapseOne.appendChild(acordionBody2);

        z++;
    }

    i++;
}

const coagula = document.getElementById('Pruebas de Coagulacion Sanguinea');
const hemato = document.getElementById('Hematologia');
const pruHepa = document.getElementById('Pruebas de Funcionamiento Hepatico');
const enzima = document.getElementById('Enzimas');
const serolo = document.getElementById('Serologia');
const hepa = document.getElementById('Hepatitis');
const liqui = document.getElementById('Liquidos Corporales');
const inmuno = document.getElementById('Inmunoglobulinas');
const quimica = document.getElementById('Quimica Sanguinea');
const check = document.getElementById('Check Up');
const copro = document.getElementById('Coprologia');
const marca = document.getElementById('Marcadores Tumorales');
const hormo = document.getElementById('Hormonas');
const uro = document.getElementById('Urologia');
const bact = document.getElementById('Bacteriologia');
const elec = document.getElementById('Electrolitos');
const drogasA = document.getElementById('Drogas de Abuso');
const drogasT = document.getElementById('Drogas Terapeuticas');
const pato = document.getElementById('Patologia');
const perfi = document.getElementById('Perfiles');
const tiro = document.getElementById('Tiroides');
const ets = document.getElementById('Enfermedades de Transmision Sexual');

hemato.addEventListener("click", () => {
    hemato.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/hematologia.png) center center/cover";
    hemato.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

coagula.addEventListener("click", () => {
    coagula.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/coagulacion.png) center center/cover";
    coagula.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

pruHepa.addEventListener("click", () => {
    pruHepa.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/pruebaHepa.png) center center/cover";
    pruHepa.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

enzima.addEventListener("click", () => {
    enzima.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/enzimas.png) center center/cover";
    enzima.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

serolo.addEventListener("click", () => {
    serolo.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/serologia.png) center center/cover";
    serolo.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

hepa.addEventListener("click", () => {
    hepa.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/hepatitis.png) center center/cover";
    hepa.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

liqui.addEventListener("click", () => {
    liqui.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/liquidoCorporal.png) center center/cover";
    liqui.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

inmuno.addEventListener("click", () => {
    inmuno.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/inmunoglobulinas.png) center center/cover";
    inmuno.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

quimica.addEventListener("click", () => {
    quimica.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/quimica.png) center center/cover";
    quimica.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

check.addEventListener("click", () => {
    check.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/checkUp.png) center center/cover";
    check.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

copro.addEventListener("click", () => {
    copro.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/coprologico.png) center center/cover";
    copro.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

marca.addEventListener("click", () => {
    marca.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/marcadoresTumorales.png) center center/cover";
    marca.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

hormo.addEventListener("click", () => {
    hormo.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/hormonas.png) center center/cover";
    hormo.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

uro.addEventListener("click", () => {
    uro.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/urologia.png) center center/cover";
    uro.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

bact.addEventListener("click", () => {
    bact.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/bacteriologia.png) center center/cover";
    bact.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

elec.addEventListener("click", () => {
    elec.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/electrolitos.png) center center/cover";
    elec.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

drogasA.addEventListener("click", () => {
    drogasA.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/drogasAbuso.png) center center/cover";
    drogasA.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

drogasT.addEventListener("click", () => {
    drogasT.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/drogasTerapeuticas.png) center center/cover";
    drogasT.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

pato.addEventListener("click", () => {
    pato.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/patologia.png) center center/cover";
    pato.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

perfi.addEventListener("click", () => {
    perfi.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/perfiles.png) center center/cover";
    perfi.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

tiro.addEventListener("click", () => {
    tiro.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/tiroides.png) center center/cover";
    tiro.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

ets.addEventListener("click", () => {
    ets.parentElement.parentElement.parentElement.style.background = "url(img/Fondos/ets.png) center center/cover";
    ets.parentElement.parentElement.parentElement.style.transition = "0.5s";
});

window.addEventListener('scroll', () => {
    if(prevY >= 0 && prevY < 20){
        //console.log(boton);
        div.classList.remove('move');
        logo.classList.remove('move');
        for(let b=0; b<4; b++){
            boton[b].classList.remove('move');
        }
    }
    else{
        div.classList.add('move');
        logo.classList.add('move');
        for(let b=0; b<4; b++){
            boton[b].classList.add('move');
        }
    }
    prevY = window.scrollY;
});
