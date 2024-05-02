const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (this.scrollY > 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

window.addEventListener('DOMContentLoaded' , function() {
    if(this.scrollY < 50) {
       navbar.classList.remove('active');
    } else {
       navbar.classList.add('active');
    }
})