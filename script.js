const div = document.getElementById('navBar');
const logo = document.getElementById('navBrand');
const boton = document.getElementsByClassName('nav-link');
let prevY = window.scrollY;
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
})