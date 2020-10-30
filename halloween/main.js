
// a function that gives you this is halloween if the date is 10/31
function halloween(dt) {
	var date = dt.getDate();
	var month = dt.getMonth();
	if (month === 9 && date === 31) {
		return "This is Halloween";
	} else {
		return "Not Halloween"
	}
} 




