let form = document.querySelector("form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    fetch("url",{
        method: "POST",
        body: JSON.stringify({
            name,
            email,
            password,

        }),
    });
});