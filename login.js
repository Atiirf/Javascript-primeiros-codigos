const fs = require('fs');

class Login{
    constructor(user, senha){
        this.user = user;
        this.senha = senha;
    }
}

let login = new Login ("email@gmail.com", "A123");

let logins = JSON.stringify(login, null, 2);

fs.writeFile('logins.json', logins, err =>{
    if (err) {
        console.error(err);
    } else {
        console.log("Sucesso ao escrever em um arquivo .json.");
    }
});

console.table(login)


