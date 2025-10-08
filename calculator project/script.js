const buttons = document.querySelectorAll('.boxes');
const output = document.querySelector('.output-show');
let currentValue = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim();
    currentValue += value;
    output.textContent = currentValue;
  });
});

 if (!isNaN(keyvalue) || ['+', '-', '*', '/', '.'].includes(keyvalue)){
    currentValue+=value;
    output.textContent=currentValue;
 }