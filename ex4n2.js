const imageUrl = "/images/paysage.png";

let img=document.createElement("img")

img.setAttribute("src",imageUrl)
let box =document.querySelector("#image-container")
box.appendChild(img)