const user = {
  name: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};
for (const key in user) {
    let userPropriety=document.querySelector(`.card-${key}`)
    console.log(userPropriety);
    userPropriety.textContent=user[key]
    
    
}