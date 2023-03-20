// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { changeHeader, closeMenu, toggleMenu, navCheck } from './menu';
import { adjustWindow } from './viewport';

const botonMenu = document.getElementById('boton-menu');
const sections = document.querySelectorAll('section');

const option = {
  threshold: 0.2
};
let observer = new IntersectionObserver(navCheck, option);

sections.forEach(section => {
  observer.observe(section);
});

botonMenu.addEventListener('click', () => toggleMenu(botonMenu));

window.addEventListener('scroll', () => {
  changeHeader();
  closeMenu(botonMenu);
});

window.addEventListener('resize', adjustWindow);

adjustWindow();

// Carousel clients

const clientsImg = document.getElementById('clients-img');
const testimonials = document.querySelectorAll('.testimonial');
const testimonialsContainer = document.getElementById('testimonials-container');
const nextTestimonialBtn = document.getElementById('testimonials-next');
const prevTestimonialBtn = document.getElementById('testimonials-prev');

const area = {
  root: testimonialsContainer,
  rootMargin: '0px',
  threshold: 0.5
};

const testimonialsScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('testimonial--active');
      clientsImg.src = entry.target.lastElementChild.src;
      clientsImg.alt = entry.target.lastElementChild.alt;
      if (!entry.target.previousElementSibling) {
        deactivateButton(prevTestimonialBtn);
      } else {
        activateButton(prevTestimonialBtn);
      }
      if (!entry.target.nextElementSibling) {
        deactivateButton(nextTestimonialBtn);
      } else {
        activateButton(nextTestimonialBtn);
      }
    } else {
      entry.target.classList.remove('testimonial--active');
    }
  });
};

const deactivateButton = btn => {
  btn.disabled = true;
};

const activateButton = btn => {
  btn.disabled = false;
};

const nextSlide = (array, scroll) => {
  const movScroll = array[0].clientWidth;
  scroll.scrollLeft += movScroll;
};
const prevSlide = (array, scroll) => {
  const movScroll = array[0].clientWidth;
  scroll.scrollLeft -= movScroll;
};

const observerTestimonial = new IntersectionObserver(testimonialsScroll, area);
testimonials.forEach(testimonial => {
  observerTestimonial.observe(testimonial);
});

nextTestimonialBtn.addEventListener('click', () => {
  nextSlide(testimonials, testimonialsContainer);
});
prevTestimonialBtn.addEventListener('click', () => {
  prevSlide(testimonials, testimonialsContainer);
});

//carousel works

const worksScroll = document.getElementById('works-scroll');
const worksPrev = document.getElementById('works-prev');
const worksNext = document.getElementById('works-next');
const works = document.querySelectorAll('.work');
const sizes = ['small', 'medium', 'big'];

let worksArea = {
  root: worksScroll,
  rootMargin: '0px',
  threshold: [0.65]
};

let worksObserver = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      entry.target.dataset.size = 'big';
      let activos = document.querySelectorAll('.active');

      if (activos.length > 1) {
        activos.forEach((activo, index) => {
          activo.dataset.size = sizes[index];
        });
      }
      if (!activos[0].previousElementSibling) {
        deactivateButton(worksPrev);
      } else {
        activateButton(worksPrev);
      }
      if (!entry.target.nextElementSibling) {
        deactivateButton(worksNext);
      } else {
        activateButton(worksNext);
      }
    } else {
      entry.target.classList.remove('active');
      entry.target.dataset.size = 'small';
    }
  });
};

let worksScrollInter = new IntersectionObserver(worksObserver, worksArea);

works.forEach(target => {
  target.classList.remove('active');
  worksScrollInter.observe(target);
});

worksNext.addEventListener('click', () => {
  nextSlide(works, worksScroll);
});
worksPrev.addEventListener('click', () => {
  prevSlide(works, worksScroll);
});
