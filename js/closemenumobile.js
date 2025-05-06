document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar toggler and navbar-collapse elements
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarSupportedContent');
    var overlay = document.querySelector('#overlay'); // Overlay element

    // When the navbar-toggler button is clicked, toggle the navbar open/close
    navbarToggler.addEventListener('click', function(event) {
        event.stopPropagation();  // Prevent the click event from propagating to the document
        navbarCollapse.classList.toggle('show'); // Toggle the navbar visibility
        
        // Show or hide the overlay based on the navbar state
        if (navbarCollapse.classList.contains('show')) {
            overlay.style.display = 'block';  // Show overlay when navbar is open
        } else {
            overlay.style.display = 'none';  // Hide overlay when navbar is closed
        }
    });

    // Close the navbar when clicking outside of it
    document.addEventListener('click', function(event) {
        // Check if the click happened outside the navbar and the navbar is open
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target) && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show'); // Close the navbar
            overlay.style.display = 'none'; // Hide the overlay
        }
    });

    // Prevent closing the navbar when clicking inside it (on a nav item or link)
    navbarCollapse.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from propagating to the document
    });
});
