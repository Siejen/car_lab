// implicitly, this lives inside of an object
	function Car(make, model, year, color){
  	this.make = make;
  	this.model = model;
 // do the same for year and color
  	this.year = year;
  	this.color = color;	
 	this.state = "off";
 	this.previousOwners = [];
 	this.currentOwner = "manufacturer";
 	this.passengers = [];
}

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function(){
	this.state = "on";
};
Car.prototype.off = function() {
	this.state = "off";
}
Car.prototype.driveTo = function(destination) {
	if (this.state === "on") {
		console.log("driving to " + destination);
	};
}
Car.prototype.park = function() {
	if ( this.state === "off" ) {
		console.log("parked!!");
	};
}
Car.prototype.pickUp = function(name) {
	if (this.state === "on") {
		console.log("driving to pick up " + name);
		this.passengers.push(name);
	};
}
// Car.prototype.dropOff = function(name) {

// 	var idx = this.passengers.indexOf(name);

// 	if ((idx > -1 ) && (this.state === "on")) {
// 		this.passengers.splice( idx, 1 );		
// 	}
// }
