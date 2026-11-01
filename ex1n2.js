const user = {
    nome: "Karim Benali",
    email: "karim@exemple.com",
    role: "Administrateur",
};
for (const key in user) {
    let usrePropriety = document.querySelector(`#user-${[key]}`)
    console.log(usrePropriety);
    usrePropriety.textContent=user[key]
  
}
