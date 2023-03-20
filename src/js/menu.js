const headerBackg = document.getElementById('header-background');
const lineMenu = document.getElementById('menu-line');
const menu = document.getElementById('menu');

const changeHeader = () => {
  if (window.scrollY >= 50) {
    headerBackg.classList.add('header__background--opacity');
  } else {
    headerBackg.classList.remove('header__background--opacity');
  }
};

const toggleMenu = botonMenu => {
  botonMenu.classList.add('icono-menu--active');
  lineMenu.classList.toggle('icono-menu__line--close');
  menu.classList.toggle('menu--open');
  setTimeout(() => {
    botonMenu.classList.remove('icono-menu--active');
  }, 800);
  headerBackg.classList.toggle('header__background--active');
};

const closeMenu = botonMenu => {
  if (menu.classList.contains('menu--open')) {
    botonMenu.classList.add('icono-menu--active');
    lineMenu.classList.remove('icono-menu__line--close');
    menu.classList.remove('menu--open');
    setTimeout(() => {
      botonMenu.classList.remove('icono-menu--active');
    }, 800);
    headerBackg.classList.toggle('header__background--active');
  }
};

const navCheck = entries => {
  entries.forEach(entry => {
    const idName = entry.target.id;
    const activeAnchor = document.querySelector(`[rel=${idName}]`);
    if (entry.isIntersecting) {
      activeAnchor.classList.add('menu__item--active');
    } else {
      activeAnchor.classList.remove('menu__item--active');
    }
  });
};

export { changeHeader, toggleMenu, closeMenu, navCheck };
