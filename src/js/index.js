// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { changeHeader, closeMenu, toggleMenu } from './menu';
import { adjustWindow } from './viewport';

const botonMenu = document.getElementById('boton-menu');

botonMenu.addEventListener('click', () => toggleMenu(botonMenu));

window.addEventListener('scroll', () => {
  changeHeader;
  closeMenu(botonMenu);
});

window.addEventListener('resize', adjustWindow);

adjustWindow();
