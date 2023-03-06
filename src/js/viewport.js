let vh = window.visualViewport.height;
let ventana = document.getElementById('inicio');

const adjustWindow = () => {
  vh = window.visualViewport.height;
  ventana.style.height = `${vh}px`;
};

export { adjustWindow };
