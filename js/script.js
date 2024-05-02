const element = document.querySelector('nav');

window.addEventListener("scroll", function () {
  if (this.scrollY > 50) {
    element.classList.add('shadow');
  } else {
    element.classList.remove('shadow');
  }
});

window.addEventListener('DOMContentLoaded' , function() {
    if(this.scrollY < 50) {
       element.classList.remove('shadow');
    } else {
       element.classList.add('shadow');
    }
})

function clickMenu() {
  const menuNav = document.getElementById('menu')

  if(menuNav.style.display == 'flex') {
    menuNav.style.display = 'none'
  } else {
    menuNav.style.display = 'flex'
  }
}