class Player{
    constructor(force, life, shot, name){
        this._force = force
        this._life = life
        this._shot = shot 
        this._name = name
    }

    shot(){

    }
}

class Dragon extends Player{
    
}
class Knight extends Player{

}


//qui frappe qui en random 
//Suggestions de règles et d'initialisation : 
//les persos démarrent avec 100PV et une force de 10 (on pourra faire varier plus tard pour voir comment réagit l'algo si on donne l'avantage à l'un ou à l'autre...
//qui frappe qui à chaque combat ? randomisé avec des chances à peu près égales (ex: on tire un Math.random(), s'il est inférieur à 0.5 c'est le player1 qui frappe, sinon c'est le player2)
//le dommage infligé par un perso doit être proportionnel à sa force (par exemple, bêtement multiplier un Math.random() par la force et arrondir à 2 décimales)