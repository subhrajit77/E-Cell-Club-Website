window.addEventListener('scroll', function () {
  let navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) { /* Change the value based on when you want the color to change */
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

let observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.1 });

let cards = document.querySelectorAll('.animate-on-scroll');
cards.forEach(card => {
  observer.observe(card);
});



// circular cards animation



// membership section animations

