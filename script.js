var navLinks = document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.right = "0";
    }
    function hideMenu(){
        navLinks.style.right = "-400px";
    }
    function toggleNav() {
        var navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('open');
      }
      
      // Attach the toggleNav function to the click event of the hamburger and close icons
      document.querySelector('.bi.bi-list').addEventListener('click', toggleNav);
      document.querySelector('.bi.bi-x-lg').addEventListener('click', toggleNav);
      
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
    $(document).ready(function(){
        $("#carouselExampleIndicators").carousel({
          interval: 2000,
          pause: "hover"
        });
      });

    
    