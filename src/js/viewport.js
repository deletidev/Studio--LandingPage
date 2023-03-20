let vh = window.visualViewport.height;
let homeStart = document.getElementById('home-start');

const adjustWindow = () => {
  vh = window.visualViewport.height;
  homeStart.style.height = `${vh}px`;
};

export { adjustWindow };
