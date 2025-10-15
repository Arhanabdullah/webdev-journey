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
