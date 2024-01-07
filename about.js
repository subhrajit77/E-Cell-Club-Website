window.addEventListener('scroll', function () {
  let navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) { /* Change the value based on when you want the color to change */
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});