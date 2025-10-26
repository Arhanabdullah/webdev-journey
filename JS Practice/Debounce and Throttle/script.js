//debouncing --->   agr hmm koi action kr rhe h aur hmm nhi chahte ki har action me kuch ho, jbb bhi mere action ke beech me kuch specific gap aaye toh fir woh action/reaction perform ho
function debounce(fnc, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer= setTimeout(()=> {
            fnc(...args);
        }, delay)
    }
}

function throttle(fnc, delay){
    let timer=0;
    return function(...args){
        let now= Date.now();
        if(now-timer>= delay)
        {
            timer=now;
            fnc(...args);
        }
    };
}

let input = document.querySelector("input");
input.addEventListener("input",debounce(function(){console.log("Debounce");
},1000))
input.addEventListener("input",throttle(function(){console.log("Throttle");},1000))