// Classes For Fetching Information on a Sports Player

class Player {
	constructor(name, age, height, weight) {
		this.name = name;
		this.age = age;
		this.height = height;
		this.weight = weight;
	}
	getAge() {
		return `${this.name} is age ${this.age}`;
	}
	getHeight() {
		return `${this.name} is ${this.height}cm`;
	}
	getWeight() {
		return `${this.name} weighs ${this.weight}kg`;
	}
} 

const player1 = new Player('Patrick Mahomes', 24, 188, 104);
const player2 = new Player('Jimmy Garoppolo', 28, 188, 102);
const player3 = new Player('Julio Jones', 31, 191, 100);


console.log(player1.getAge());
console.log(player1.getHeight());
console.log(player1.getWeight());