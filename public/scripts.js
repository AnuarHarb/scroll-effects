'use strict';
// Dom Elements
const header = document.querySelector('header');
const red = document.querySelector('#red');

// Event Listeners - Este escucha el evento de scroll
document.addEventListener('scroll', scrollController)

// Funciones
// -- scrollController maneja los distintos efectos que dependen del scroll
function scrollController() {
  // Constante que guarda el valor del scroll que ha hecho la ventana
  const windowScroll = window.pageYOffset;
  headerHeightChange(windowScroll);
  headerColorChange(windowScroll);
  redAnimation(windowScroll);
}

// headerHeightChange cambia el alto del header y su opacidad
function headerHeightChange(windowScroll) {
  if(windowScroll > 0) {
    header.classList.add('scroll-up');
  } else {
    header.classList.remove('scroll-up');
  }
}

// headerColorChange cambia el colopr del header al llegar al cuadro de color
function headerColorChange(windowScroll) {
  const redScrollValue = red.offsetTop;
  if(windowScroll >= redScrollValue - 45) {
    header.classList.add('scroll-up-red');
  } else {
    header.classList.remove('scroll-up-red');
  }
}

// redAnimation hace que el cuadro de vueltas
function redAnimation(windowScroll) {
  const redScrollValue = red.offsetTop;
  if(windowScroll >= redScrollValue - 300) {
    red.style.transform = "rotate(" + windowScroll + "deg)";
  } else{ 
    red.classList.remove('animated');
  }
}
