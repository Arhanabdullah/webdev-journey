function setDarkOrLight() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}
if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"));
} else {
    setDarkOrLight();
}

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function () {
        setDarkOrLight();
    });

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
    }
});




let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
form.addEventListener("submit", (dets) => {
  dets.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  document.querySelector("#emailError").textContent="";
  document.querySelector("#passwordError").textContent="";
  let emialans = emailPattern.test(email.value);
  let passwordans = passwordPattern.test(password.value);
  if(!emialans){
    document.querySelector("#emailError").textContent="Email is incorrect!";
  }
  if(!passwordans){
    document.querySelector("#passwordError").textContent="Password is incorrect!";
  }
});
