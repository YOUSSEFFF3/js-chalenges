let button=document.querySelectorAll(".btn")
button.forEach(element => {
    console.log(element);
    element.addEventListener("click",(e)=>{
        const target=e.target
target.textContent="cliqued !"
    })
    
});