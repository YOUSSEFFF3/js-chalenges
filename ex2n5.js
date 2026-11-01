let count = 0;
let button=document.querySelector("#increment")
button.addEventListener("click",(e)=>{
    ++count
    console.log(count);
    
    let counter=document.querySelector("#counter")
    console.log(counter);
    
    counter.textContent=count
})