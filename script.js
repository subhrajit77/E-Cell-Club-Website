window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-400px";
}
function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

// Attach the toggleNav function to the click event of the hamburger and close icons
document.querySelector('.bi.bi-list').addEventListener('click', toggleNav);
document.querySelector('.bi.bi-x-lg').addEventListener('click', toggleNav);

//for rocket animation
window.addEventListener('scroll', function () {
  let lottiePlayer = document.getElementById('lottie-player');
  let scrollPosition = window.scrollY;
  lottiePlayer.style.transform = `translateY(-${scrollPosition}px)`;
});




//   scroll down animation
document.addEventListener('DOMContentLoaded', function () {
    let welcomeContainer = document.querySelector('.welcome');

    function handleScroll() {
        let scrollPosition = window.scrollY;
        let elementPosition = welcomeContainer.offsetTop;

        // Adjust the threshold value based on when you want the animation to start
        let threshold = window.innerHeight / 2;

        if (scrollPosition >= elementPosition - threshold) {
            welcomeContainer.style.opacity = '1';
            welcomeContainer.style.transform = 'translateY(0)';
        }
    }

    // Initial check on page load
    handleScroll();

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);
});





// carousel for whats latest
document.addEventListener('DOMContentLoaded', (event) => {
    var myCarousel = document.querySelector('#carouselExampleCaptions')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 100,
        // pause: "hover"
    });
});

//quote section
function updateQuote() {
  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
      let randomIndex = Math.floor(Math.random() * data.length);
      let randomQuote = data[randomIndex];
      document.getElementById('quote').textContent = `"${randomQuote.text}"`;
      // document.getElementById('author').textContent = `— ${randomQuote.author}`;
    })
    .catch(error => console.log('Error:', error));
}

// Update the quote immediately, then every 10 seconds
updateQuote();
setInterval(updateQuote, 10000);





// welcome container
$(document).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 200) {
        $('.welcome-container').addClass('visible');
      } else {
        $('.welcome-container').removeClass('visible');
      }
    });
  });


