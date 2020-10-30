function halloween(dt) {
	var date = dt.getDate();
	var month = dt.getMonth();
	if (month === 9 && date === 31) {
		return "This is Halloween";
	} else {
		return "Not Halloween"
	}
} 




