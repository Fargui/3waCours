class Player{
    constructor(name, life, force){
        this._force = force
        this._life = life
        this._name = name
        this._shot = 0 
    }
    get name() {
		return this._name;
	}
	computeDamage() {
		return Math.round(100 * Math.random() * this._force) / 100;
	}
	decrementLife(dmg) {
		this._life = Math.round(100 * (this._life - dmg)) / 100;
	}
	incrementShot() {
		this._shot++;
	}
	isAlive() {
		return this._life > 0;
	}
}
setInterval(() => {
    
}, interval);

class Dragon extends Player{
    constructor(name, life, shot, force){
        super(name, life, shot, force)
    }

}
class Knight extends Player{
    constructor(name, life, shot, force){
        super(name, life, shot, force)
    }
}

class Game{
    constructor(p1, p2){
        this._player1 = p1
        this._player2 = p2      
    }

   
    run(){

        while (this._player1.isAlive() && this._player2.isAlive()) {
            let whoStart = Math.random();
            const [assaillant, defenseur] = whoStart < 0.5 ? [this._player1, this._player2] : [this._player2, this._player1] ;
    
            // l'assaillant détermine les points de dommage
                const dmg = assaillant.computeDamage();
                // on retire ce dommage des PV de la victime
                defenseur.decrementLife(dmg);
                // incrémenter le compteur de shots de l'assaillant
                assaillant.incrementShot();
        }
        this.displayResults()
    }
    displayResults() {
		console.log(
			`Le vainqueur est ${
				this._player1.isAlive() ? this._player1.name : this._player2.name
			}`
		);
		console.log(this);
	}
    
}

const dragon = new Dragon('Dragarius', 100, 10 )
const knight = new Knight('Lancelot', 100, 10 )

const game = new Game(dragon, knight);

game.run();


//qui frappe qui en random 
//Suggestions de règles et d'initialisation : 
//les persos démarrent avec 100PV et une force de 10 (on pourra faire varier plus tard pour voir comment réagit l'algo si on donne l'avantage à l'un ou à l'autre...
//qui frappe qui à chaque combat ? randomisé avec des chances à peu près égales (ex: on tire un Math.random(), s'il est inférieur à 0.5 c'est le player1 qui frappe, sinon c'est le player2)
//le dommage infligé par un perso doit être proportionnel à sa force (par exemple, bêtement multiplier un Math.random() par la force et arrondir à 2 décimales)