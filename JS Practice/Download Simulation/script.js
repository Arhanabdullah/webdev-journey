let progress = document.querySelector(".progress");
let percentage = document.querySelector(".percentage");
let count =0;
let txt = document.querySelector("#status-text")
setTimeout(()=>{
let tm = setInterval(()=>{
    if(count<=99){
        count++;
        progress.style.width= `${count}%`;
        percentage.textContent=`${count}%`;
    }
    else{
        txt.textContent= "Downloaded.";
        clearInterval(tm);
    }
},100);
}, 2000);