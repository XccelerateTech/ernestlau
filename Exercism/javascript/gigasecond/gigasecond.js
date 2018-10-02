function gigasecond(year,month,day){
	var birthday = new Date(year,month-1,day) // Month is zero-based
	var date1 = birthday.getTime();
	date2 = new Date(date1 + 1000000000000); //10000000000s(10^9 second) = 1000000000000ms
	// No Deatils time needed
	date2.setHours(0);
	date2.setSeconds(0);
	date2.setMinutes(0);
	console.log("The day after 10^9 second you borned will be on " + date2);
 }
 
 //Typing the birthday by yyyy-mm-dd order and system shown the moment after 10^9 seconds.
 gigasecond(1993,10,13);