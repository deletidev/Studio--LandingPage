// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const menu = document.getElementById('menu');
const headerBackg = document.getElementById('header-background');
const botonMenu = document.getElementById('boton-menu');
const lineMenu = document.getElementById('menu-line');
const obturador = document.getElementById('obturador');

botonMenu.addEventListener('click', () => {
  botonMenu.classList.add('icono-menu--active');
  lineMenu.classList.toggle('icono-menu__line--close');
  menu.classList.toggle('menu--open');
  setTimeout(removeT, 800);
  headerBackg.classList.toggle('header__background--active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    headerBackg.classList.add('header__background--opacity');
  } else {
    headerBackg.classList.remove('header__background--opacity');
  }
});

function removeT() {
  botonMenu.classList.remove('icono-menu--active');
}
