	function Gigasecond(birthDate) {
	  this.birthDate = birthDate;
	};
  
	Gigasecond.prototype.date = function() {

	  return new Date(this.birthDate.getTime() + 1000000000000); //s to ms
	};
  

	module.exports = Gigasecond;

	var gs = new Gigasecond(Date.UTC(2015, 8, 14));
	console.log(gs.date());
 
