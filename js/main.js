const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menuModal = document.getElementById("modal");

openMenu.addEventListener("click", function () {
  menuModal.classList.add("is-open");
});

closeMenu.addEventListener("click", function () {
  menuModal.classList.remove("is-open");
});

console.log("hello");
