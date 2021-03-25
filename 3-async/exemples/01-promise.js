const checkNumber = (number)=> // pas d'acolades {} pour se dispenser du mot clef return car c'est une fonction simple qui ne fait qu'un return
    new Promise( (resolve, reject)=>{
        setTimeout(() => {
            if(isNaN(number)){ reject (new Error(`${number} n'est pas un nombre`))
            resolve(number)
            return
        }
        }, 1000);
    })

/*     const p = checkNumber(3);
    p
    .then((br)=> checkNumber(br + 2))
    .then((br)=> checkNumber(br + 3))
    .then((br)=> checkNumber(br + 4))
    .then((br)=> checkNumber(br + 5))    
    .then((br)=> console.log(br))    
    .catch((err)=> console.log('ERREUR :' + $(err.message))); */


    Promise.all([checkNumber(3), checkNumber(4)])
    .then((res)=> console.log(res))
    