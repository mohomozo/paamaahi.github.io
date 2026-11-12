
// Smooth navigation
document.querySelectorAll('nav a, .button').forEach(link => {
  link.addEventListener('click', function(event) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Console message
console.log("Welcome to PAAMAHI!");
