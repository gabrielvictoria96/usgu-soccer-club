
const mobileButton = document.querySelector(".btn-mobile");
const navLinks = document.querySelector(".navlinks");

mobileButton.addEventListener("click", openLinks);

function openLinks() {
   mobileButton.classList.toggle("open");
   navLinks.classList.toggle("open");
}

window.addEventListener('scroll', () => {
   const pageUp = document.querySelector(".page_up");

   pageUp.classList.toggle("sticky", window.scrollY > 600);
})
