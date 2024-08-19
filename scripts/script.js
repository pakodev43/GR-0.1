// Nav toggle on mobile

var nav = document.getElementById('nav')
var navToggle = document.getElementById('navToggle')

navToggle.onclick = () => {
    nav.classList.toggle('opened')
}