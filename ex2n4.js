let buttons = document.querySelectorAll(".color-btn")
buttons.forEach(element => {
    element.addEventListener("mouseenter", (e) => {
        let target = e.target
        console.log(target);

        let color = document.querySelector(".color")
        color.textContent = target.textContent
    })

});