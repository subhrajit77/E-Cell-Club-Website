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