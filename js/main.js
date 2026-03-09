const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menuModal = document.getElementById("modal");
const modalLink = document.getElementsByClassName("modal-link");

openMenu.addEventListener("click", function () {
  menuModal.classList.add("is-open");
});

closeMenu.addEventListener("click", function () {
  menuModal.classList.remove("is-open");
});

Array.from(modalLink).forEach((link) => {
  link.addEventListener("click", function () {
    menuModal.classList.remove("is-open");
  });
});

menuModal.addEventListener("click", function () {
  menuModal.classList.remove("is-open");
});

console.log(modalLink);
