function myFunction() {
    var element = document.body;
    element.classList.toggle("");
}
const body = document.querySelector("body");
const toggleMode = document.querySelector(".toggle");

toggleMode.addEventListener("click", () => {
  let actualTheme = body.className;

  localStorage.setItem("dark-mode", actualTheme);
  body.classList.toggle("dark-mode");
});