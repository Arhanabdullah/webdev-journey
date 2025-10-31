function setDarkOrLight() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        container.classList.add("dark");
        document.body.classList.remove("light");
        container.classList.remove("light");
        localStorage.setItem("theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.add("light");
        container.classList.add("light");
        document.body.classList.remove("dark");
        container.classList.remove("dark");
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
let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    console.log("Theme button clicked!");

    if (document.body.classList.contains("dark")) {
        document.body.classList.add("light");
        container.classList.add("light");
        document.body.classList.remove("dark");
        container.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.add("dark");
        container.classList.add("dark");
        document.body.classList.remove("light");
        container.classList.remove("light");
        localStorage.setItem("theme", "dark");
    }
});




let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
  const validationMessage = document.getElementById("validationMessage");
  
  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";
  
  const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordVal);
  if (!emailValid) {
      document.querySelector("#emailError").textContent = "Email is incorrect!";
    }
    if (!passwordValid) {
        document.querySelector("#passwordError").textContent = "Password is incorrect!";
    }
    
  if (emailValid && passwordValid) {
    validationMessage.textContent = "Validation Successful!";
  } else {
    validationMessage.textContent = "Please enter valid details.";
  }

  validationMessage.classList.add("show");
  setTimeout(() => {
    validationMessage.classList.remove("show");
  }, 3000);
});
