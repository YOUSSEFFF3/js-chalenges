const users = [
    {
        id: 1,
        name: "Karim Benali",
        email: "karim@exemple.com",
        role: "Administrateur"
    },
    {
        id: 2,
        name: "Sofia Martin",
        email: "sofia@exemple.com",
        role: "Éditrice"
    },
    {
        id: 3,
        name: "Yanis Haddad",
        email: "yanis@exemple.com",
        role: "Développeur"
    },
    {
        id: 4,
        name: "Léa Dubois",
        email: "lea@exemple.com",
        role: "Designer"
    },
];
const data = document.querySelectorAll(".user-card")
console.log(data);

data.forEach(element => {
    console.log(element);
    for (const key in users) {
        for (const prop in users[key]) {
           
            let user = document.querySelector(`.card-${key}`)
            console.log(`.card-${key}`);
            user.textContent=users[key]
            
            
            
        }

    }

});
