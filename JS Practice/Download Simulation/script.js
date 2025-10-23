let progress = document.querySelector(".progress");
let percentage = document.querySelector(".percentage");
let count =0;
let txt = document.querySelector("#status-text")
let button= document.querySelector("button");
let interval;
let tm =()=>{ 
    clearInterval(interval);
  count = 0;
  interval = setInterval(() => {
    if (count < 100) {
      count++;
      progress.style.width = `${count}%`;
      percentage.textContent = `${count}%`;
      txt.textContent = "Downloading...";
    } else {
      txt.textContent = "Downloaded.";
      clearInterval(interval);
      
    }
  }, 100);
};
button.addEventListener("click",tm)

