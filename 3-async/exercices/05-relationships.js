const fs = require("fs");

const getJsonFromFile = (path) =>
	new Promise((resolve, reject) => {
		fs.readFile(path, { encoding: "utf8" }, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(JSON.parse(data));
		});
	});

// TODO Faire une promesse globale qui est résolue quand on obtient les contenus désérialisés des 2 fichiers
// Après résolution, créer une structure de données contenant des relations nommées


Promise.all([getJsonFromFile('../data/dragons.json'),getJsonFromFile('../data/relationships.json')])
.then(([{dragons}, {relationships}])=> {
/*     console.log(dragons);
    console.log(relationships); */

    //initialiser le tableau conteneur
const nameRelationships = [];
for (const rel of relationships) {
    const dragonName = dragons.find( d => d.id === rel.id).name;
    const friendNames = []
    for (const friendId of rel.relation) {
        const friendName = dragons.find((d)=> d.id === friendId).name
        friendNames.push(friendName)
    }

    nameRelationships.push({name : dragonName , friendNames : friendNames})
}
    
console.log(nameRelationships);

 
})
.catch((err)=> console.log('ERREUR :' + $(err.message))); 



/* Exemple de structure souhaitée */
/*
  [
		{
			name: "Common Welsh Green",
			friendNames: ["Hebridean Black", "Kayda"]
		},
		{
      name : ....,
      friendNames: [......]
		},
    .......
	]
*/