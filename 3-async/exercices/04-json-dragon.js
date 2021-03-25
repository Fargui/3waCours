const fs = require("fs");

const getJsonFromFile = (path)=> 
    new Promise((resolve, reject)=>{

        
            // impossible de lire le fichier
            setTimeout(() => {
                fs.readFile(path, { encoding: "utf8" }, (err, data) => {
                    if (err) {
                        reject(err); //err est deja une instance de Error
                        return;
                    }
                    resolve(JSON.parse(data))
                });  
            } ,1000);
        
    })
getJsonFromFile('../data/dragons.json')
.then(({dragons})=>{
   /*  console.log(dragons) */

    // Trier par âge décroissant
    dragons.sort((a, b) => b.age - a.age);
		console.log(dragons);
})
.catch((err)=> console.log(`ERREUR :  ${err.message}`));

