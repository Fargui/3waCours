const fib = (i = 1, j = 1) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve([j, i + j]); //C'est ce qu'il retourne
		}, 500);
	});

/**
 * Fonction asynchrone qui résout et affiche successivement les nombres de la suite de fibonacci, indéfiniment
 */

const getFibSuite = async () => {
    let [x, y] = [1,1]
    while (true) {
        [x, y] = await fib(x,y)
        console.log(y);//Y qui est egal à i + j
    }
    
};

getFibSuite();