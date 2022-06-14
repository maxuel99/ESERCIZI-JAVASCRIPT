const person = {
	set firstName(value) {
		this._firstName = value
	},
	get firstName() {
		return this._firstName
	},

	set lastName(value) {
		this._lastName = value
	},
	get lastName() {
		return this._lastName
	},

	fullName: function(){
		return this.firstName + " " + this.lastName;
	}

}

let john = Object.create(person);
john.firstName = "John";
john.lastName = "Doe";

let simon = Object.create(person);
simon.firstName = "Simon";
simon.lastName = "Collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins