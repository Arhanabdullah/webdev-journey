const box1 = document.getElementById("box-1")
box1.addEventListener('click', () => {
    box1.style.backgroundColor = 'red';
})
const box2 = document.getElementById("box-2")
box2.addEventListener('click', () => {
    box2.style.backgroundColor = 'blue';
})
const box3 = document.getElementById("box-3")
box3.addEventListener('click', () => {
    box3.style.backgroundColor = 'green';
})
const box4 = document.getElementById("box-4")
box4.addEventListener('click', () => {
    box4.style.backgroundColor = 'yellow';
})

const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const heading = document.getElementById("head");

function greetUser() {
    const name = nameInput.value.trim();

    if (name) {
        heading.textContent = `Hello, ${name}`;
    } else {
        heading.textContent = "Hello";
    }
}

// Listen for click on button
greetButton.addEventListener("click", greetUser);


nameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        greetUser();
    }
});