const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click',() => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
})

const links = document.querySelectorAll('.nav-links');
links.forEach(n => {
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
  })
})

