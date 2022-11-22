// const modulos = require ("./modules/modulos");

// console.log(modulos.retornarFilme(5));

const fs  = require("fs");

fs.readFile("./dados.json", (error, data) => {
    
    if (!error) {
        const dataJson = JSON.parse(data);

        console.log(dataJson);
    }
});

console.log('teste em adamento');