	function Gigasecond(birthDate) {
	  this.birthDate = birthDate;
	  this.gigasecond = 1000000000000;
	};
  
	Gigasecond.prototype.date = function() {

	  return new Date(this.birthDate.getTime() + this.gigasecond);
	};
  

	module.exports = Gigasecond;

	// var gs = new Gigasecond(Date.UTC(2015, 8, 14));
	// console.log(gs.date());
 
