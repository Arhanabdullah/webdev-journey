const buttons = document.querySelectorAll(".boxes");
const output = document.querySelector(".output-show");
let currentValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();

    if (value === "C") {
      currentValue = "";
      output.textContent = "";
    } 
    else if (value === "Backspace" || value === "CE") {
      currentValue = currentValue.slice(0, -1);
      output.textContent = currentValue;
    } 
    else if (value === "=") {
      try {
        currentValue = eval(currentValue).toString();
        output.textContent = currentValue;
      } catch {
        output.textContent = "Error";
        currentValue = "";
      }
    } 
    else {
      currentValue += value;
      output.textContent = currentValue;
    }
  });
});



document.addEventListener("keydown", (e) => {
  const keyvalue = e.key;

  if (!isNaN(keyvalue) || ["+", "-", "*", "/", "."].includes(keyvalue)) {
    currentValue += keyvalue;
    output.textContent = currentValue;
  } 
  else if (keyvalue === "Enter") {
    try {
      currentValue = eval(currentValue).toString();
      output.textContent = currentValue;
    } catch {
      output.textContent = "Error";
      currentValue = "";
    }
  } 
  else if (keyvalue === "Backspace") {
    currentValue = currentValue.slice(0, -1);
    output.textContent = currentValue;
  } 
  else if (keyvalue === "Escape") {
    currentValue = "";
    output.textContent = "";
  }
});