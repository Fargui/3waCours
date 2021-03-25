const fetch = require("node-fetch");
const fs = require("fs");

fetch("https://jsonplaceholder.typicode.com/users")
	//.then((response) => response.text())
	/*.then((jsonString) => {
		const data = JSON.parse(jsonString);
		console.log(data);
	});*/
	//.then((jsonString) => JSON.parse(jsonString))
	.then((response) => response.json())
	.then((users) => {

        const userMap = new Map();
        for (const {name, address : {geo}} of users) {
            userMap.set(name, geo)
        }
        console.log(userMap);

        // transformer la Map en tableau pour la stringifier, utiliser de l'indentation pour que le string obtenu soit facilement lisible``
        const jsonString = JSON.stringify(Array.from(userMap), null, 2 /* tabulation */)
        console.log(jsonString);

        //ecrire un fichier contenant ce string
        fs.writeFile("../data/users.json", jsonString, (err)=>{
            if (err) throw err;
        })
    
	});