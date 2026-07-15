const hamBtn = document.querySelector(".ham")
const navbar = document.querySelector(".navbar")
const navlinks = document.querySelector(".navlinks")


hamBtn.addEventListener("click", function() {

hamBtn.classList.toggle('active')
navbar.classList.toggle('active')
navlinks.classList.toggle('active')

});
