function createToaster(configuration){
    return function(str){
        let div = document.createElement("div");
        div.textContent = str;
        div.className= "toaster-notification inline-block bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded shadow-lg";
        document.querySelector(".parent").appendChild(div);
        setTimeout(()=>{
            document.querySelector(".parent").removeChild(div);
        },configuration.duration*1000);
    }
}
let toaster = createToaster({
    positionX: "right",
    positiony: "top",
    theme: "dark",
    duration: 3,
})

toaster("Thanks For Downloading")